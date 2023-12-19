import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IMeasures } from './dto/measures.interface';

@Injectable()
export class MongoService {

  constructor(@Inject('smartaladrine') private measuresModel: Model<IMeasures>) { }

  public findAllMeasures = async (): Promise<IMeasures[]> => this.measuresModel.find().exec();
}