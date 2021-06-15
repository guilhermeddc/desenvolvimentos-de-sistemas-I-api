import {EntityRepository, Repository} from 'typeorm';

import State from '../models/State';

@EntityRepository(State)
class StateRepository extends Repository<State> {
  public async findByName(name: string): Promise<State | null> {
    const findState = await this.findOne({
      where: {name},
    });

    return findState || null;
  }
}

export default StateRepository;
