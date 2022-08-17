import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/*
[인터셉터]
- 메소드 요청의 이전/이후에 추가적인 로직을 만들수 있음
- 메소드에서 나온 response를 수정 가능
- 메소드에서 나온 Exception을 수정 가능
- 기본적인 함수 기능 확장
- 구체적인 조건을 가진 함수를 완벽히 override 가능
*/
@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  // 인터프린터는 언제나 AOP를 사용하므로 다음 내용을 참고 바람.
  // https://3months.tistory.com/74
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        // 요청에서 에러를 감지
        catchError((err) =>
          // 해당 에러 대신 다음과 같은 에러를 throw
          throwError(
            () => new HttpException('New message', HttpStatus.BAD_GATEWAY),
          ),
        ),
      );
  }
}
