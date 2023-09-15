import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UserIpInterceptor } from './cls/user-ip.interceptor';

@UseInterceptors(UserIpInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/als')
  getAls(): string {
    return this.appService.getAls();
  }

  @Get('/cls')
  getCls(): object {
    return this.appService.getCls();
  }
}
