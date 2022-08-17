import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// 서비스에는 Injectable이 필수!
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
