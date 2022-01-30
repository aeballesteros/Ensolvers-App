import { Injectable, Render } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return "Hola mundo";
  }
}
