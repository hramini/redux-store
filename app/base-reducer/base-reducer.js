"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_reducer_1 = require("../redux-store/redux-reducer");
var BaseReducer = /** @class */ (function () {
    function BaseReducer() {
        this.reduxReducer = redux_reducer_1.ReduxReducer.getInstance();
        this.reduxReducer.setReducer(this.registerReducer());
    }
    return BaseReducer;
}());
exports.BaseReducer = BaseReducer;
//# sourceMappingURL=base-reducer.js.map