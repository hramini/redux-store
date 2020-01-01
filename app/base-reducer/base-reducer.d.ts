import { ReducersMapObject } from "redux";
export declare abstract class BaseReducer {
    private reduxReducer;
    constructor();
    protected abstract registerReducer(): ReducersMapObject;
}
