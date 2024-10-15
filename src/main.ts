import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-execptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdaptor }: any = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdaptor));

  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
