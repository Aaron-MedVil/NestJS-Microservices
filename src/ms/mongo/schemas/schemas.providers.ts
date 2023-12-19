import * as mongoose from 'mongoose';
import { MeasuresSchema } from "./measures.schema";

import { config } from '../config/connection';
const { PROTOCOL, USER, PASSWORD, URI, PORT, DATABASE } = config;

export const SCHEMAS_PROVIDERS = [
    {
        provide: 'smartaladrine',
        useFactory: (connection: mongoose.Connection) =>
            connection.model('smartaladrine', MeasuresSchema, 'smartaladrine'),
        inject: ['MONGODB_CONNECTION'],
    },
];

export const DATABASE_PROVIDERS = [
    {
        provide: 'MONGODB_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`${PROTOCOL}://${USER}:${PASSWORD}@${URI}:${PORT}/${DATABASE}`)
    },
];