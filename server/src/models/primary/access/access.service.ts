import { Injectable } from '@nestjs/common';

@Injectable()
export class AccessService {
  getHello(): string {
    return 'Hello World!';
  }
  update(productId: string, title: string, desc: string, price: number) {

  }
}
