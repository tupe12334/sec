import { Module } from '@nestjs/common';
import { CompanyfactsController } from './companyfacts.controller';

@Module({
  controllers: [CompanyfactsController],
})
export class CompanyfactsModule {}
