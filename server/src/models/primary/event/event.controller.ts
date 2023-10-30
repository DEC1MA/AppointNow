import { Body, Controller, Get, Post } from "@nestjs/common";
import { EventService } from "./event.service";

@Controller("/event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  main(): string {
    return this.eventService.main();
  }

  @Post("/create")
  async create(
    @Body() body: any
  ): Promise<{ status: string; data?: any; details?: any }> {
    return await this.eventService.create(body);
  }

  @Post("/search")
  async search(
    @Body() body: any
  ): Promise<{ status: string; data?: any; details?: any }> {
    return await this.eventService.search(body);
  }

  @Post("/cancel")
  async cancel(
    @Body() body: any
  ): Promise<{ status: string; data?: any; details?: any }> {
    return await this.eventService.cancel(body);
  }

  @Post("/cancelUserEvents")
  async cancelUserEvents(
    @Body() body: any
  ): Promise<{ status: string; data?: any; details?: any }> {
    return await this.eventService.cancelUserEvents(body);
  }

  @Post("/cancelBusinessEvents")
  async cancelBusinessEvents(
    @Body() body: any
  ): Promise<{ status: string; data?: any; details?: any }> {
    return await this.eventService.cancelBusinessEvents(body);
  }

  @Post("/readFreeTimes")
  async readFreeTimes(
    @Body() body: any
  ): Promise<{ status: string; data?: any; details?: any }> {
    return await this.eventService.readFreeTimes(body);
  }

  @Post("/businessEvents")
  async businessEvents(
    @Body() body: any
  ): Promise<{ status: string; data?: any; details?: any }> {
    return await this.eventService.businessEvents(body);
  }
}
