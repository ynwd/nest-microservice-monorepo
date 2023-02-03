import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  async getHello() {
    return this.client.send('hello', 'Progressive Coder');
  }

  async getHelloWithPayload() {
    return this.client.send('hello-payload', 'Progressive Coder');
  }
}
