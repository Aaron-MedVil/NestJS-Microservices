import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { MongoController } from './mongo.controller';

import { DATABASE_PROVIDERS, SCHEMAS_PROVIDERS } from './schemas/schemas.providers';

@Module({
  controllers: [MongoController],
  providers: [
    ...DATABASE_PROVIDERS,
    ...SCHEMAS_PROVIDERS,
    MongoService,
  ],
  exports: []
})
export class MongoModule { }
