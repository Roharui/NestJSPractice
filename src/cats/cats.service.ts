import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  create(): string {
    return 'create a cat!';
  }
  findAll(): string {
    return 'this is Cat!';
  }
  modify(): string {
    return 'modify Cat!';
  }
  delete(): string {
    return 'remove Cat!';
  }
}
