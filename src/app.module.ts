import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlsModule } from './als/als.module';
import { AlsMiddleware } from './als/als.middleware';
import { ClsModule } from 'nestjs-cls';

@Module({
  imports: [
    AlsModule,
    ClsModule.forRoot({
      middleware: {
        mount: true,
        setup(cls, req) {
          cls.set('apiKeyCls', req.headers['x-api-key'])
        },
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AlsMiddleware).forRoutes('*')
  }
}
