import { IsInt, IsString } from 'class-validator';

/*
class-validator 이용해서 모든 속성 타입 검사
속성은 모두 readonly
속성 검사는 대부분 파이프를 통해 확인됨.
*/
export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
