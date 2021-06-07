import {getCustomRepository} from 'typeorm';
import {sign} from 'jsonwebtoken';
import {compare} from 'bcryptjs';

import UserRepository from '../repositories/UserRepository';
import User from '../models/User';

import authConfig from '../../../config/auth';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({email, password}: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Combinação incorreta de email e senha.', 401);
    }

    const passwordMashed = await compare(password, user.password);

    if (!passwordMashed) {
      throw new AppError('Combinação incorreta de email e senha.', 401);
    }

    const {secret, expiresIn} = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
