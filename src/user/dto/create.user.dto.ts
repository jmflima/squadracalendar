import { IsEmail, IsNumberString, IsString, Length } from "class-validator";

//npm i --save class-validator class-transformer (instalando class-validator)
export class CreateUserDto {
  
  @IsString()
  name: string;

  @IsEmail(undefined, {message: "O Email deve ter o formato válido"} )
  email: string;

  @IsNumberString()
  @Length(11, 11)
  telefone: string;
}
  