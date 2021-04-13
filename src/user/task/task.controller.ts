//módulo criado com: nest g co user/task


import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create.task.dto';
import { UpdateTaskDto } from '../dto/update.task.dto';
import { TaskService } from './task.service';

@Controller('users/:id_user/tasks')
export class TaskController {

    constructor(private taskService: TaskService) {};
    
    @Post()
    createTask(@Param('id_user') id_user: number, @Body() createTaskDto: CreateTaskDto){
        createTaskDto.userId = id_user;
        return this.taskService.createTask(createTaskDto);
    }

    @Get()
    findTasks(@Param('id_user', ParseIntPipe) userId: number){
        return this.taskService.findTasks(userId);
    }

    @Put(":id")
    updateUser(@Body() updateTaskDto: UpdateTaskDto, @Param("id") id: number){
         return this.taskService.updateTask(id, updateTaskDto);
    }
 
    @Delete(":id")
    deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
    }
 
}

