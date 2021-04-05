import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks(): any[] {
    const task1 = {
      id: 1,
      descricao: "Cozinhar",
    }

    const task2 = {
      id: 2,
      descricao: "Estudar Node Js",
    };
    return [task1, task2];
  }
}
