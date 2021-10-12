import {Controller, Get} from '@nestjs/common';

@Controller('match')
export class RiotMatchController {

  @Get()
  getInfo() {
    return 'Hello';
  }
}
