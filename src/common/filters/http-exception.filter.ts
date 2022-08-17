import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

/*
[예외 필터]
- 만약 예외가 해당 애플리케이션의 코드에서 처리되지 않는다면 이 단계에서 catch되며 
유저 친화적인 예외를 던지게 됨.
*/
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();
    
    // HttpException에 다음과 같은 방식으로 대응함.
    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
