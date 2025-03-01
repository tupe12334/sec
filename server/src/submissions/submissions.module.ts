import { Module } from '@nestjs/common';
import { SubmissionsController } from './submissions.controller';

@Module({
  controllers: [SubmissionsController],
  providers: [],
  exports: [],
})
export class SubmissionsModule {}
