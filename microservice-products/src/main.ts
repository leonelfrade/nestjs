import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.TCP,
      options:{
        host: process.env.HOST || "127.0.0.1",
        port: parseInt(process.env.PORT) || 4444,
      }
    },
  );
  await app.listen();
}
bootstrap();
