import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class AppService {
  constructor(private readonly als: AsyncLocalStorage<any>, private readonly cls: ClsService,) { }

  getAls(): string {
    // return 'salam,'
    return this.als.getStore().apiKeyAls
  }

  getCls(): object {
    const apikey = this.cls.get('apiKeyCls')
    const ip = this.cls.get('ip')
    return {
      apikey, ip
    }
  }
}
