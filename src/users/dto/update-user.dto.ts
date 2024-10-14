import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types'; //installed separately

export class UpdateUserDto extends PartialType(CreateUserDto) {
  //   id: number;
}
