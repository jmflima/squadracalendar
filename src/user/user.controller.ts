import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';

@Controller('users')    // criado com (nest g co user) 
export class UserController {

    constructor(private userService: UserService) {};

    @Post()
    createUser(@Body() createUserDto: CreateUserDto ){
//        return this.userService.createUser(createUserDto);
        return createUserDto;
    }
}
