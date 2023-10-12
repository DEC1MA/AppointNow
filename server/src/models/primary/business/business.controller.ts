import { Body, Controller, Get, Post } from '@nestjs/common';
import { BusinessService } from './business.service';

@Controller('/business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  main(): string {
    return this.businessService.main();
  }

  @Post('/create')
  async create(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.businessService.create(body)
  }

  @Post('/update')
  async update(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.businessService.update(body)
  }

  @Post('/search')
  async search(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.businessService.search(body)
  }

  @Post('/readMyBusiness')
  async readMyBusiness(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.businessService.readMyBusiness(body)
  }
}
