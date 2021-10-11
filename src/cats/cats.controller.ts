import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  @HttpCode(201)
  create(): string {
    // 고양이 생성하기
    return this.catService.create();
  }

  @Get()
  findAll() {
    //고양이 전부 출력하기
    return this.catService.findAll();
  }

  @Put()
  @HttpCode(202)
  modify(): string {
    //고양이 수정하기
    return this.catService.modify();
  }

  @Delete()
  @HttpCode(202)
  delete(): string {
    // 고양이 삭제하기
    return this.catService.delete();
  }
}
