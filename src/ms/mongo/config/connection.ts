import * as path from 'path';
import * as dotenv from 'dotenv';
import * as appRoot from 'app-root-path';

dotenv.config({ path: path.resolve(appRoot.path, '.env') });

export const config = {
    PROTOCOL: process.env.MONGODB_PROTOCOL ?? 'mongodb',
    URI: process.env.MONGODB_URI ?? 'localhost',
    PORT: process.env.MONGODB_PORT ?? 27017,
    USER: process.env.MONGODB_USER ?? '',
    PASSWORD: process.env.MONGODB_PASSWORD ?? '',
    DATABASE: process.env.MONGODB_DATABASE ?? ''
};

console.log(config);