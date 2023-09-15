import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AppService {
  constructor(private readonly als: AsyncLocalStorage<any>) { }

  getHello(): string {
    // return 'salam,'
    return this.als.getStore().apiKey
  }
}
