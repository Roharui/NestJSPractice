import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 파이프 사용
  app.useGlobalPipes(new ValidationPipe());

  // 전역 미들웨어는 해당 코드로 사용가능.
  // app.use(LoggerMiddleware)

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
