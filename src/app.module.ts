import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './ms/mongo/mongo.module';
import { MqttModule } from './ms/mqtt/mqtt.module';

@Module({
  imports: [MongoModule, MqttModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
