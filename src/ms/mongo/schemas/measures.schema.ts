import * as mongoose from 'mongoose';

export const MeasuresSchema = new mongoose.Schema({
    data: mongoose.Schema.Types.Mixed,
    _family: String,
    _group: String,
    _device: String,
    _state: Number,
    _version: Number,
    _timestamp: Number,
    _updated_date: Number,
    _from_date: Number,
    _to_date: Number
});