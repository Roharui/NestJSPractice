import { SetMetadata } from '@nestjs/common';

// rolse라는 메타데이터 key에 다음 값을 넣는다는 것
// 이 메타데이터는 해당 메소드에 종속됨.
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
