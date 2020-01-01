import { ReducersMapObject, Store } from "redux";
import { IRegisterComponent } from "./register-component-interface";
export declare class ReduxStore {
    private static instance;
    private store;
    private reducer;
    private registeredComponents;
    constructor(reducers: ReducersMapObject);
    static getInstance(reducers: ReducersMapObject): ReduxStore;
    getStore(): Store;
    registerComponent(registeredComponent: IRegisterComponent): void;
    getRegisteredComponents(): object;
    private combineReducers;
    private stateUpdater;
}
