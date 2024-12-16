import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './configs/configuration';
import { TrpcModule } from '@server/trpc/trpc.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TrpcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
