import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService {
  getHello(): string {
    return 'Hello World!';
  }
  create(userId: String, name: String, businessId: String) {

  }
  update(userId: String, roomId: String, meta: Object) {

  }
  delete(userId: String, roomId: String) {
    
  }
}
