import { Injectable } from '@nestjs/common';
import transactions from '../../../drivers/storage/transactions';

@Injectable()
export class BusinessService {
  main(): string {
    return 'Welcome to business controller !';
  }
  create(body: {
    userId: string, name: string, about: string, location: string, phone: string, workingDays: Array<any>,
    workingHours: Array<any>, duration: number
  }) {
    return transactions.business.create(body.userId, body.name, body.about, body.location, body.phone, body.workingDays, body.workingHours, body.duration)
  }
  update(body: {
    userId: string, name: string, about: string, location: string, phone: string, workingDays: Array<any>,
    workingHours: Array<any>, duration: number, businessId: string
  }) {
    return transactions.business.update(body.userId, body.businessId, body.name, body.about, body.location, body.phone, body.workingDays, body.workingHours, body.duration)
  }
  search(body: { userId: string, query: string }) {
    return transactions.business.search(body.userId, body.query)
  }
  readMyBusiness(body: { userId: string }) {
    return transactions.business.readMyBusiness(body.userId)
  }
}
