import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // cors 설정 origin은 localhost만 접근 가능하도록
    cors: { origin: 'http://localhost:3000/' },
  });
  await app.listen(3000);
}
bootstrap();
