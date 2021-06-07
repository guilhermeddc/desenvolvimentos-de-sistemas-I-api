import {Request, Response} from 'express';
import {getCustomRepository} from 'typeorm';

import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import userResponse from '../../../shared/utils/userResponse';

class UserController {
  public async indexOfRole(request: Request, response: Response) {
    const {user_type} = request.params;

    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.findByUserType(user_type);

    const serializedUser = users?.map(user => {
      return userResponse(user);
    });

    return response.json(serializedUser);
  }

  public async create(request: Request, response: Response) {
    const userBody = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute(userBody);

    return response.json(user);
  }
}

export default new UserController();
