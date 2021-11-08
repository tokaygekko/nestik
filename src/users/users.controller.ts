import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import User from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  getOne(@Param('id') id: number): Promise<User> {
    return this.userService.getOne(id)
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto)
  }
}
