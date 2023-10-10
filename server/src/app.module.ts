import { Module, MiddlewareConsumer, NestModule  } from '@nestjs/common';
import { AuthMiddleware } from './middlewares/login.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessModule } from './models/primary/access/access.module';
import { BusinessModule } from './models/primary/business/business.module';
import { EventModule } from './models/primary/event/event.module';
import { RoomModule } from './models/primary/room/room.module';
import { UserModule } from './models/primary/user/user.module';

@Module({
  imports: [AccessModule, BusinessModule, EventModule, RoomModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('user', 'business', 'room', 'event', 'access');
  }
}
