import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    // 해당 값의 type을 가져옴.
    if (!metatype || !this.toValidate(metatype)) {
      // 메타타입이 존재하지 않거나 검사에서 통과한다면 해당 값을 리턴함.
      return value;
    }
    // 해당 값을 class로 변형
    const object = plainToClass(metatype, value);
    // class-validater를 이용해 검사.
    const errors = await validate(object);
    if (errors.length > 0) {
      // 만일 에러의 개수가 1개 이상이라면 Exception을 throw 시킴.
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Type<any>): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}
