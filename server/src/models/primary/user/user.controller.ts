import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/main')
  main(): string {
    return this.userService.main();
  }

  @Post('/register')
  async register(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.userService.register(body)
  }

  @Post('/verify')
  async verify(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.userService.verify(body)
  }

  @Post('/complete')
  async complete(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.userService.complete(body)
  }

  @Post('/login')
  async login(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.userService.login(body)
  }

  @Post('/connectTelegram')
  async connectTelegram(@Body() body: any): Promise<{ status: string, data?: any, details?: any }> {
    return await this.userService.connectTelegram(body)
  }
}
