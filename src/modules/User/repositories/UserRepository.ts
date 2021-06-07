import {EntityRepository, Repository} from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByUserType(user_type: string): Promise<User[] | null> {
    const findUser = await this.find({
      where: {user_type},
    });

    return findUser || null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const findUser = await this.findOne({
      where: {email},
    });

    return findUser || null;
  }
}

export default UserRepository;
