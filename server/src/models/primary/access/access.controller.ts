import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccessService } from './access.service';

@Controller('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Get()
  getHello(): string {
    return this.accessService.getHello();
  }

  @Get(':id')
  getHelloById(): string {
    return this.accessService.getHello();
  }

  @Post()
  postSomething(): string {
    return '';
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    //this.accessService.updateAccess(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }

  @Delete(':id')
  delSomething(): string {
    return '';
  }
}
