import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as colors from 'colors';

const PORT = 3000;
const HOST = '0.0.0.0';

async function bootstrap() {

    const app = await NestFactory.create(AppModule, { bodyParser: true });
    app.enableCors();

    await app.listen(PORT, HOST, async () => {
        console.log(colors.cyan(`Application is running on <${await app.getUrl()}>`));
    });
}

bootstrap();