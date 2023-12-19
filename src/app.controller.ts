import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { BadRequestException } from './core/exceptions';
import { ExceptionConstants } from './core/exceptions/exceptions.constants';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class IName {
  @IsNotEmpty()
  @IsNumber()
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: IName): string {
    console.log(query);
    throw new BadRequestException({
      message: 'Bad Request Exception',
      cause: new Error('haha'),
      description: 'description',
      code: ExceptionConstants.BadRequestCodes.INVALID_PARAMETER_VALUE,
    });
    return this.appService.getHello();
  }
}
