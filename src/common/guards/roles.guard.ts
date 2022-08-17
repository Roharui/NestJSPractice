import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


/*
모든 Grad에는 CanActivate interface가 implements되어야 하며
해당 interface의 canActivate메소드는 boolean을 리턴하거나 
boolean을 리턴하는 Promise 혹은 Observable이어야한다.
*/
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 해당 메소드의 메타데이터중 key가 'roles'인 value를 가져옴
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    // 만약 rolse가 존재하지 않는다면 바로 통과
    // (인증이 필요하지 않다는 뜻.)
    if (!roles) {
      return true;
    }
    // request에서 user라는 데이터를 가져와 해당 user가 이 메소드의 roles와 동일한
    // roles를 가지고 있다면 해당하는 request를 통과시킴. 
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () =>
      user.roles.some(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}
