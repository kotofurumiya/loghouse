"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoghouseLevel;
(function (LoghouseLevel) {
    LoghouseLevel[LoghouseLevel["LOG"] = 300] = "LOG";
    LoghouseLevel[LoghouseLevel["INFO"] = 400] = "INFO";
    LoghouseLevel[LoghouseLevel["WARN"] = 500] = "WARN";
    LoghouseLevel[LoghouseLevel["ERROR"] = 600] = "ERROR";
    LoghouseLevel[LoghouseLevel["NONE"] = Number.MAX_SAFE_INTEGER] = "NONE";
})(LoghouseLevel = exports.LoghouseLevel || (exports.LoghouseLevel = {}));
var Loghouse = /** @class */ (function () {
    function Loghouse(option) {
        if (option === void 0) { option = {}; }
        this.outputLevel = 'outputLevel' in option ? option.outputLevel : LoghouseLevel.LOG;
    }
    Loghouse.prototype.possess = function (consoleObj) {
        var _this = this;
        var oldConsoleLog = consoleObj.log;
        var oldConsoleInfo = consoleObj.info;
        var oldConsoleWarn = consoleObj.warn;
        var oldConsoleError = consoleObj.error;
        consoleObj.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.outputLevel <= LoghouseLevel.LOG) {
                oldConsoleLog.apply(void 0, args);
            }
        };
        consoleObj.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.outputLevel <= LoghouseLevel.INFO) {
                oldConsoleInfo.apply(void 0, args);
            }
        };
        consoleObj.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.outputLevel <= LoghouseLevel.WARN) {
                oldConsoleWarn.apply(void 0, args);
            }
        };
        consoleObj.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.outputLevel <= LoghouseLevel.ERROR) {
                oldConsoleError.apply(void 0, args);
            }
        };
        return consoleObj;
    };
    Loghouse.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.outputLevel <= LoghouseLevel.LOG) {
            console.log.apply(console, args);
        }
    };
    Loghouse.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.outputLevel <= LoghouseLevel.INFO) {
            console.info.apply(console, args);
        }
    };
    Loghouse.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.outputLevel <= LoghouseLevel.WARN) {
            console.warn.apply(console, args);
        }
    };
    Loghouse.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.outputLevel <= LoghouseLevel.ERROR) {
            console.error.apply(console, args);
        }
    };
    return Loghouse;
}());
exports.Loghouse = Loghouse;
