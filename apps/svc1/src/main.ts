import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RedisOptions, Transport } from '@nestjs/microservices';
import { Svc1Module } from './svc1.module';
const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(Svc1Module, {
    name: 'USER_SERVICE',
    transport: Transport.REDIS,
    options: {
      url: 'redis://redis:6379',
      password: 'redis',
    },
  } as RedisOptions);
  app.listen();
  logger.log(`USER_SERVICE is running`);
}
bootstrap();
