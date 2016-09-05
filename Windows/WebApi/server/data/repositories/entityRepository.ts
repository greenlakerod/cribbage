import * as tedious from 'tedious';
import * as Settings from '../../settings';


export interface IEntityBaseRepository<T> {
    add(entities: Array<T>, onEntitiesCreated: (entityIds: Array<string>) => void, onError: (error: Error) => void): void;
    delete(entity: T): void;
    edit(entity: T): void;
    get(id: string, onEntityRetrieved: (entity: T) => void, onError: (error: Error) => void): void;
    getAll(onEntitiesRetrieved: (entities: Array<T>) => void, onError: (error: Error) => void): void;  
    getBy(property: string, value: any, onEntitiesRetrieved: (entities: Array<T>) => void, onError: (error: Error) => void): void;
}

export abstract class EntityBaseRepository<T> implements IEntityBaseRepository<T> {
    protected _connection: tedious.Connection;
    protected _tableName: string;

    public add(entities: Array<T>, onEntitiesCreated: (entityIds: Array<string>) => void, onError: (error: Error) => void): void {

    }
    public delete(entity: T): void {}
    public edit(entity: T): void {}

    public get(id: string, onEntityRetrieved: (entity: T) => void, onError: (error: Error) => void): void {
        this.getSingle("select * from " + this._tableName + " where id = '" + id + "'", onEntityRetrieved, onError);
    }
    public getAll(onEntitiesRetrieved: (entities: Array<T>) => void, onError: (error: Error) => void): void {
        this.getMultiple("select * from " + this._tableName, onEntitiesRetrieved, onError);
    } 
    public getBy(property: string, value: any, onEntitiesRetrieved: (entities: Array<T>) => void, onError: (error: Error) => void): void { 
        var query = "select * from " + this._tableName + " where " + property + " = ";
        var type = typeof value;

        if (type === "string"){
            query += "'";
        }

        query += value;

        if (type === "string"){
            query += "'";
        }

        this.getMultiple(query, onEntitiesRetrieved, onError);
    }

    protected getMultiple(query: string, onEntitiesRetrieved: (entities: Array<T>) => void, onError: (error: Error) => void): void {
        var self = this;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                throw err;
            }
            var rows: Array<T> = [];
            var request: tedious.Request = new tedious.Request(query, function(error: Error, rowCount: number, rows: Array<any>){
                if (error) {
                    throw error;
                }
            });
            request.on("row", function(columns: Array<tedious.ColumnValue>){
                var row = <T>{};
                columns.forEach(function(column: tedious.ColumnValue) {
                    row[column.metadata.colName] = column.value
                })
                rows.push(row);
            });
            request.on("done", function(rowCount, more){
                onEntitiesRetrieved(rows);
            });

            self._connection.execSql(request);
        });
    }
    protected getSingle(query: string, onEntityRetrieved: (entity: T) => void, onError: (error: Error) => void): void {
        var self = this;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                throw err;
            }
            var rows: Array<T> = [];
            var request: tedious.Request = new tedious.Request(query, function(error: Error, rowCount: number, rows: Array<any>){
                if (error) {
                    throw error;
                }
            });
            request.on("row", function(columns: Array<tedious.ColumnValue>){
                var row = <T>{};
                columns.forEach(function(column: tedious.ColumnValue) {
                    row[column.metadata.colName] = column.value
                })
                rows.push(row);
            });
            request.on("done", function(rowCount, more){
                onEntityRetrieved(rowCount > 0 ? rows[0] : null);
            });

            self._connection.execSql(request);
        });
    }
}