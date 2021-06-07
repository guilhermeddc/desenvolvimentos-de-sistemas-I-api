import {getCustomRepository} from 'typeorm';
import {hash} from 'bcryptjs';

import User from '../models/User';
import UserRepository from '../repositories/UserRepository';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  email: string;
  user_type: string;
  password: string;
}

class CreateUserService {
  public async execute({
    email,
    user_type,
    password,
  }: IRequest): Promise<Omit<User, 'password'>> {
    const userRepository = getCustomRepository(UserRepository);

    const findUserByEmail = await userRepository.findByEmail(email);

    if (findUserByEmail) throw new AppError('E-mail já esta em uso', 401);

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      email,
      user_type,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
