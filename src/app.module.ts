import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

/*
[모듈]
- NestJS의 모든 기능들은 다음과 같은 Module을 통해 관리됩니다.
- Module은 트리형태를 지니고 있으며 모든 NestJS 애플리케이션은 root 모듈을 가지고 있습니다.
- 해당 모듈이 root 모듈입니다.
*/
@Module({
  // imports: 해당 모듈 하위에 연결되어있는 모듈들 입니다.
  imports: [CoreModule, CatsModule],
  // provider: 해당 모듈 전체에서 공유되는 공급자.
  // controllers: 사용하는 컨트롤러 목록
  // exports: 이 모듈에서 제공되고 이 모듈을 가져오는 다른 모듈에서 사용 가능해야 하는 공급자의 하위 집합
})
export class AppModule {}
