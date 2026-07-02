import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CompanyfactsDto } from './models/companyfacts.model';
import { findUnique } from 'src/common/Data.service';
import { CIKSchema } from 'src/types';

@Controller('companyfacts')
export class CompanyfactsController {
  constructor() {}

  @Get('/:cik')
  @ApiResponse({ type: CompanyfactsDto })
  async findUnique(@Param('cik') cik: string): Promise<string> {
    const parsedCik = CIKSchema.parse(cik);
    return findUnique('companyfacts', parsedCik);
  }
}
