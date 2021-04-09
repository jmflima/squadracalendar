import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.model';

//classe criada com (nest g s user)
@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}
    
    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userModel.findOne({
            where: {email: createUserDto.email},
        });

        if (User){
            throw new ConflictException("Email já foi cadastrado");
        }

        return this.userModel.create(createUserDto);
    }
}

