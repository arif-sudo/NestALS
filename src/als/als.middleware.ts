import { Injectable, NestMiddleware } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AlsMiddleware implements NestMiddleware {
  constructor(private readonly als: AsyncLocalStorage<any>) { }

  use(req: any, res: any, next: () => void) {
    const store = {
      apiKeyAls: req.headers['x-api-key']
    }
    this.als.run(store, () => {
      next()
    })
  }
}
