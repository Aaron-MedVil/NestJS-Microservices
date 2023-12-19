import { Controller, Get, HttpException } from '@nestjs/common';
import { MongoService } from './mongo.service';

import * as color from 'colors';

@Controller('mongo')
export class MongoController {

    constructor(private readonly mongoService: MongoService) { }

    @Get('/measures')
    public async findAllMeasures(): Promise<any> {

        const response = await this.mongoService.findAllMeasures().catch(ex => {
            console.log(color.red(`ERROR :: ${ex}`));
            throw new HttpException(ex, 500);
        });

        if (!response) { throw new HttpException('Empty response', 500); }
        return response;
    }
}

