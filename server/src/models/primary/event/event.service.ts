import { Injectable } from '@nestjs/common';
import transactions from '../../../drivers/storage/transactions';

@Injectable()
export class EventService {
  main(): string {
    return 'welcome to decima event controller !';
  }
  async cancel(body: { userId: string, eventId: string }) {
    return await transactions.event.cancel(body.userId, body.eventId)
  }
  async cancelBusinessEvents(body: { userId: string, businessId: string }) {
    return await transactions.event.cancelBusinessEvents(body.userId, body.businessId)
  }
  async cancelUserEvents(body: { userId: string }) {
    return await transactions.event.cancelUserEvents(body.userId)
  }
  async create(body: { userId: string, businessId: string, startTime: number }) {
    return await transactions.event.create(body.userId, body.businessId, body.startTime)
  }
  async search(body: { userId: string, query: string }) {
    return await transactions.event.search(body.userId, body.query)
  }
  async readFreeTimes(body: { businessId: string }) {
    return await transactions.event.readFreeTimes(body.businessId)
  }
}
