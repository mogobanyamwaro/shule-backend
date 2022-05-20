import { Module } from '@nestjs/common';
import { BackendCoreModule } from '@go-shule-backend/backend/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
