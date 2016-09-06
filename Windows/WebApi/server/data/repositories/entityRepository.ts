import * as tedious from 'tedious';
import * as Settings from '../../settings';
import * as Data from '../../data';

export interface IEntityBaseRepository<T> {
    add(entity: T, onEntityCreated: (entityId: string) => void, onError: (error: Error) => void): void;
    delete(entity: T): void;
    edit(entity: T): void;
    get(id: string, onEntityRetrieved: (entity: T) => void, onError: (error: Error) => void): void;
    getAll(onEntitiesRetrieved: (entities: Array<T>) => void, onError: (error: Error) => void): void;  
    getBy(property: string, value: any, onEntitiesRetrieved: (entities: Array<T>) => void, onError: (error: Error) => void): void;
}

export abstract class EntityBaseRepository<T> implements IEntityBaseRepository<T> {
    protected _connection: tedious.Connection;
    protected _tableName: string;

    public add(entity: T, onEntityCreated: (entityId: string) => void, onError: (error: Error) => void): void {
        var self = this;
        var entityId: string = "";
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onError(err);
            } else {
                var query = "INSERT __table__ (__fields__) OUTPUT INSERTED.id VALUES (__values__);";
                var params = self.getSqlParams(entity);
                query = query.replace("__table__", self._tableName);
                query = query.replace("__fields__", params.properties);
                query = query.replace("__values__", params.values);

                var request: tedious.Request = new tedious.Request(query , function(error: Error, rowCount: number, rows: Array<any>){
                    if (error) {
                        onError(error);
                    }
                });
                for (var i=0; i<params.params.length; i++) {
                    var param = params.params[i];
                    request.addParameter(param.name, param.type, param.value);
                }

                request.on("row", function(columns: Array<tedious.ColumnValue>){
                    columns.forEach(function(column: tedious.ColumnValue) {
                        if (column.value !== null) {
                            entityId = column.value;
                        }
                    })                    
                });
                request.on("done", function(rowCount, more){
                    onEntityCreated(entityId);
                });

                this._connection.execSql(request);      
            }
        });
    }
    public delete(entity: T, onComplete: (isSuccess: boolean, error: Error) => void): void {
        var self = this;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onComplete(false, err);
            } else {
                var query = "INSERT __table__ (__fields__) OUTPUT INSERTED.id VALUES (__values__);";
                var params = self.getSqlParams(entity);
                query = query.replace("__table__", self._tableName);
                query = query.replace("__fields__", params.properties);
                query = query.replace("__values__", params.values);

                var request: tedious.Request = new tedious.Request(query , function(error: Error, rowCount: number, rows: Array<any>){
                    if (error) {
                        onError(error);
                    }
                });
                for (var i=0; i<params.params.length; i++) {
                    var param = params.params[i];
                    request.addParameter(param.name, param.type, param.value);
                }

                request.on("row", function(columns: Array<tedious.ColumnValue>){
                    columns.forEach(function(column: tedious.ColumnValue) {
                        if (column.value !== null) {
                            entityId = column.value;
                        }
                    })                    
                });
                request.on("done", function(rowCount, more){
                    onEntityCreated(entityId);
                });

                this._connection.execSql(request);      
            }
        });        
    }
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
                onError(err);
            } else {
                var rows: Array<T> = [];
                var request: tedious.Request = new tedious.Request(query, function(error: Error, rowCount: number, rows: Array<any>){
                    if (error) {
                        onError(error);
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
            }
        });
    }
    protected getSingle(query: string, onEntityRetrieved: (entity: T) => void, onError: (error: Error) => void): void {
        var self = this;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onError(err);
            } else {
                var rows: Array<T> = [];
                var request: tedious.Request = new tedious.Request(query, function(error: Error, rowCount: number, rows: Array<any>){
                    if (error) {
                        onError(error);
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
            }
        });
    }
    protected getSqlParams(entity: T): { params: Array<Data.ISqlParam>, properties: string, values: string } {
        var insertData: { params: Array<Data.ISqlParam>, properties: string, values: string } = {
            params: [],
            properties: "",
            values: ""
        };
        var params: Array<Data.ISqlParam> = [];
        for (var property in entity) {
            params.push(<Data.ISqlParam>{
                name: property,
                type: this.getSqlType(property),
                value: entity[property]
            });
        }
        insertData.params = params;

        for (var i=0; i<params.length; i++) {
            if (i > 0){
                insertData.properties += ", ";
                insertData.values += ", ";
            }
            insertData.properties += params[i];
            insertData.values += "@" + params[i];
        }

        return insertData;
    }
    protected abstract getSqlType(property: string): tedious.TediousType;
}