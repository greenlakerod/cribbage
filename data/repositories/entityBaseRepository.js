"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const Settings = require("../../settings");
class EntityBaseRepository {
    add(entity, onEntityCreated, onError) {
        var self = this;
        var entityId = "";
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onError(err);
            }
            else {
                var query = "INSERT __table__ (__fields__) OUTPUT INSERTED.id VALUES (__values__);";
                var params = self.getInsertCommandSqlParams(entity);
                query = query.replace("__table__", self._tableName);
                query = query.replace("__fields__", params.properties);
                query = query.replace("__values__", params.values);
                var request = new tedious.Request(query, function (error, rowCount, rows) {
                    if (error) {
                        onError(error);
                    }
                });
                for (var i = 0; i < params.params.length; i++) {
                    var param = params.params[i];
                    request.addParameter(param.name, param.type, param.value);
                }
                request.on("row", function (columns) {
                    columns.forEach(function (column) {
                        if (column.value !== null) {
                            entityId = column.value;
                        }
                    });
                });
                request.on("done", function (rowCount, more) {
                    onEntityCreated(entityId);
                });
                this._connection.execSql(request);
            }
        });
    }
    delete(id, onComplete) {
        var self = this;
        var entityId;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onComplete(false, err);
            }
            else {
                var query = "DELETE FROM __table__ OUTPUT INSERTED.id WHERE id = '__id__';";
                query = query.replace("__table__", self._tableName);
                query = query.replace("__id__", id);
                var request = new tedious.Request(query, function (error, rowCount, rows) {
                    if (error) {
                        onComplete(false, error);
                    }
                });
                request.on("row", function (columns) {
                    columns.forEach(function (column) {
                        if (column.value !== null) {
                            entityId = column.value;
                        }
                    });
                });
                request.on("done", function (rowCount, more) {
                    onComplete(true, null);
                });
                this._connection.execSql(request);
            }
        });
    }
    edit(entity, onComplete) {
        var self = this;
        var entityId;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onComplete(false, err);
            }
            else {
                var query = "UPDATE __table__ SET __fields__ OUTPUT INSERTED.id WHERE id = '__id__';";
                var s = "";
                var i = 0;
                for (var prop in entity) {
                    var value = entity[prop];
                    if (i > 0) {
                        s += ", ";
                    }
                    s += prop + "=" + (self.isString(prop)
                        ? ("'" + value + "'")
                        : (self.getSqlType(prop) === tedious.TYPES.DateTime)
                            ? "convert(datetime, '" + value + "')"
                            : value);
                    i++;
                }
                query = query.replace("__table__", self._tableName);
                query = query.replace("__fields__", s);
                query = query.replace("__id__", entity.id);
                var request = new tedious.Request(query, function (error, rowCount, rows) {
                    if (error) {
                        onComplete(false, error);
                    }
                });
                request.on("row", function (columns) {
                    columns.forEach(function (column) {
                        if (column.value !== null) {
                            entityId = column.value;
                        }
                    });
                });
                request.on("done", function (rowCount, more) {
                    onComplete(true, null);
                });
                this._connection.execSql(request);
            }
        });
    }
    get(id, onEntityRetrieved, onError) {
        this.getSingle("select * from " + this._tableName + " where id = '" + id + "'", onEntityRetrieved, onError);
    }
    getAll(ids, onEntitiesRetrieved, onError) {
        var query = "select * from " + this._tableName;
        if (ids && ids.length > 0) {
            if (ids.length === 1) {
                query += " where id = '" + ids[0] + "'";
            }
            else {
                query += " where id in (";
                ids.forEach(function (id, index, array) {
                    if (index > 0) {
                        query += ", ";
                    }
                    query += "'" + id + "'";
                });
                query += ")";
            }
        }
        this.getMultiple(query, onEntitiesRetrieved, onError);
    }
    getAllBy(property, value, onEntitiesRetrieved, onError) {
        var query = "select * from " + this._tableName + " where " + property + " = ";
        var isString = this.isString(property);
        if (isString) {
            query += "'";
        }
        query += value;
        if (isString) {
            query += "'";
        }
        this.getMultiple(query, onEntitiesRetrieved, onError);
    }
    getMultiple(query, onEntitiesRetrieved, onError) {
        var self = this;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onError(err);
            }
            else {
                var rows = [];
                var request = new tedious.Request(query, function (error, rowCount, rows) {
                    if (error) {
                        onError(error);
                    }
                });
                request.on("row", function (columns) {
                    var row = {};
                    columns.forEach(function (column) {
                        row[column.metadata.colName] = column.value;
                    });
                    rows.push(row);
                });
                request.on("done", function (rowCount, more) {
                    onEntitiesRetrieved(rows);
                });
                self._connection.execSql(request);
            }
        });
    }
    getSingle(query, onEntityRetrieved, onError) {
        var self = this;
        this._connection = new tedious.Connection(Settings.Configuration.dbConfig);
        this._connection.on("connect", function (err) {
            if (err) {
                onError(err);
            }
            else {
                var rows = [];
                var request = new tedious.Request(query, function (error, rowCount, rows) {
                    if (error) {
                        onError(error);
                    }
                });
                request.on("row", function (columns) {
                    var row = {};
                    columns.forEach(function (column) {
                        row[column.metadata.colName] = column.value;
                    });
                    rows.push(row);
                });
                request.on("done", function (rowCount, more) {
                    onEntityRetrieved(rowCount > 0 ? rows[0] : null);
                });
                self._connection.execSql(request);
            }
        });
    }
    getInsertCommandSqlParams(entity) {
        var insertData = {
            params: [],
            properties: "",
            values: ""
        };
        var params = [];
        for (var property in entity) {
            params.push({
                name: property,
                type: this.getSqlType(property),
                value: entity[property]
            });
        }
        insertData.params = params;
        for (var i = 0; i < params.length; i++) {
            if (i > 0) {
                insertData.properties += ", ";
                insertData.values += ", ";
            }
            insertData.properties += params[i];
            insertData.values += "@" + params[i];
        }
        return insertData;
    }
    isString(property) {
        var type = this.getSqlType(property);
        switch (type) {
            case tedious.TYPES.Char:
            case tedious.TYPES.NChar:
            case tedious.TYPES.NText:
            case tedious.TYPES.NVarChar:
            case tedious.TYPES.UniqueIdentifier:
                return true;
            default:
                return false;
        }
    }
}
exports.EntityBaseRepository = EntityBaseRepository;
