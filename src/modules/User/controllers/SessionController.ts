import {Request, Response} from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';
import userResponse from '../../../shared/utils/userResponse';

class SessionController {
  public async create(request: Request, response: Response) {
    const {email, password} = request.body;

    const authenticateUser = new AuthenticateUserService();

    const {user, token} = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({user: userResponse(user), token});
  }
}

export default new SessionController();
