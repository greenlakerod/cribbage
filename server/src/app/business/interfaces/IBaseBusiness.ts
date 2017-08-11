import IRead = require("./IRead");
import IWrite = require("./IWrite");

interface IBaseBusiness<T> extends IRead<T>, IWrite<T> {}
export = IBaseBusiness;
