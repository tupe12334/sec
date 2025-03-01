import { Module } from '@nestjs/common';
import { CompanyfactsModule } from './companyfacts/companyfacts.module';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
  imports: [SubmissionsModule, CompanyfactsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
