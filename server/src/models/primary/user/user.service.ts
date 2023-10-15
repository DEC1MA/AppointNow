import { Injectable } from '@nestjs/common';
import transactions from '../../../drivers/storage/transactions'

@Injectable()
export class UserService {
  main(): string {
    return 'welcome to decima user controller !';
  }
  async register(body: { phone: string }) {
    return await transactions.user.register(body.phone)
  }
  async verify(body: { cCode: string, vCode: string }) {
    return await transactions.user.verify(body.cCode, body.vCode)
  }
  async complete(body: { cCode: string, firstName: string, lastName: string }) {
    return await transactions.user.complete(body.cCode, body.firstName, body.lastName)
  }
  async login(body: { token: string }) {
    return await transactions.user.login(body.token)
  }
  async connectTelegram(body: { token: string, firstName: string, lastName: string }) {
    return await transactions.user.connectTelegram(body.token, body.firstName, body.lastName)
  }
}
