import { Injectable } from "@nestjs/common";
import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { ClsService } from "nestjs-cls";
import { Observable } from "rxjs";
// import Observable

@Injectable()
export class UserIpInterceptor implements NestInterceptor {
  constructor(private readonly cls: ClsService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()
    const userIp = request.connection.remoteAddress;
    this.cls.set('ip', userIp)
    return next.handle()
  }
}