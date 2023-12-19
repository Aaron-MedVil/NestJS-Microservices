import { Document } from "mongoose";

export interface IMeasures extends Document {
    readonly data: Record<string, any>;
    readonly _family: string;
    readonly _group: string;
    readonly _device: string;
    readonly _state: number;
    readonly _version: number;
    readonly _timestamp: number;
    readonly _updated_date: number;
    readonly _from_date: number;
    readonly _to_date: number;
}
