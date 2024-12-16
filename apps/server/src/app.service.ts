import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private serverPort: number;

  constructor(private readonly configService: ConfigService) {
    const serverPort = this.configService.get<number>('serverPort');

    if (!serverPort) {
      throw new Error(`Environment variables are missing`);
    }

    this.serverPort = serverPort;

  }
  getHello(): string {
    return `Server running on ${this.serverPort}`;
  }
}
