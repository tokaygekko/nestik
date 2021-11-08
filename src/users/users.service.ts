import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import User from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = await this.usersRepository.create(userDto)
    await this.usersRepository.save(newUser)
    return newUser
  }
}
