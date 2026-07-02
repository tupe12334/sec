import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { SubmissionDto } from './models';
import { findUnique } from 'src/common/Data.service';
import { CIKSchema } from 'src/types';

@Controller('submissions')
export class SubmissionsController {
  constructor() {}

  @Get('/:cik')
  @ApiResponse({ type: SubmissionDto })
  async findUnique(
    @Param('cik') cik: string,
  ): Promise<SubmissionDto | string | null> {
    const parsedCik = CIKSchema.parse(cik);
    return findUnique('submissions', parsedCik);
  }
}
