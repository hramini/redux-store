"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ReduxReducer = /** @class */ (function () {
    function ReduxReducer() {
        this.reducers = {};
    }
    ReduxReducer.prototype.setReducer = function (reducer) {
        this.reducers = tslib_1.__assign(tslib_1.__assign({}, this.reducers), reducer);
    };
    ReduxReducer.getInstance = function () {
        if (!this.instance) {
            this.instance = new ReduxReducer();
        }
        return this.instance;
    };
    ReduxReducer.prototype.getReducers = function () {
        return this.reducers;
    };
    return ReduxReducer;
}());
exports.ReduxReducer = ReduxReducer;
//# sourceMappingURL=redux-reducer.js.map