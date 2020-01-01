import { ReducersMapObject } from 'redux';
export declare class ReduxReducer {
    private static instance;
    private reducers;
    setReducer(reducer: ReducersMapObject): void;
    static getInstance(): ReduxReducer;
    getReducers(): ReducersMapObject;
}
