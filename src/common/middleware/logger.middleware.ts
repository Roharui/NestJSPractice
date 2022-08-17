import { Injectable, NestMiddleware } from '@nestjs/common';


/*
[미들웨어]
- 어떤 코드든 실행가능
- request와 response의 변형이 가능
- 요청 중단이 가능
- 스택에서 다음 미들웨어 함수를 호출 (해석하지 못함.)
- 만약 해당 미들웨어에서 요청을 끝내고 싶은게 아닌 이상 next() 함수를 실행히켜야 다음 함수, 혹은 미들웨어의 실행이 가능.
*/
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // request 로그를 찍음.
    console.log(`Request...`);
    next();
  }
}
