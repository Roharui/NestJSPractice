import {
  BadRequestException,
  PipeTransform,
  Injectable,
  ArgumentMetadata,
} from '@nestjs/common';

/*
[파이프]
파이프는 다음 2가지 사용 방식이 있음
- 변형: input 데이터를 원하는 방식으로 변형 (ex:string->int)
- 확인: 올바른 데이터가 들어왔는지 확인 그렇지 않을 경우 Exception을 throw함.
*/
@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    // 만약 들어오는 값이 올바르지 않다면.
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      // 다음과 같은 Exception을 리턴함.
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
