"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var redux_1 = require("redux");
var ReduxStore = /** @class */ (function () {
    function ReduxStore(reducers) {
        this.registeredComponents = {};
        this.reducer = this.combineReducers(reducers);
        this.store = redux_1.createStore(this.reducer, redux_1.applyMiddleware(this.stateUpdater.bind(this)));
    }
    ReduxStore.getInstance = function (reducers) {
        if (!this.instance) {
            this.instance = new ReduxStore(reducers);
        }
        return this.instance;
    };
    ReduxStore.prototype.getStore = function () {
        return this.store;
    };
    ReduxStore.prototype.registerComponent = function (registeredComponent) {
        var _a;
        this.registeredComponents = tslib_1.__assign(tslib_1.__assign({}, this.registeredComponents), (_a = {}, _a[registeredComponent.name] = registeredComponent.setState, _a));
    };
    ReduxStore.prototype.getRegisteredComponents = function () {
        return this.registeredComponents;
    };
    ReduxStore.prototype.combineReducers = function (reducers) {
        return redux_1.combineReducers(reducers);
    };
    ReduxStore.prototype.stateUpdater = function (store) {
        var _this = this;
        return function (dispatch) {
            return function (action) {
                var result = dispatch(action);
                action.componentName &&
                    action.componentName.map(function (value) {
                        _this.registeredComponents[value] &&
                            _this.registeredComponents[value]({});
                    });
                return result;
            };
        };
    };
    return ReduxStore;
}());
exports.ReduxStore = ReduxStore;
//# sourceMappingURL=redux-store.js.map