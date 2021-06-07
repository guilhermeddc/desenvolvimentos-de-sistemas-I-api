import {getCustomRepository} from 'typeorm';

import State from '../models/State';
import StateRepository from '../repositories/StateRepository';

class IndexStateService {
  public async execute(): Promise<State[] | null> {
    const stateRepository = getCustomRepository(StateRepository);

    const states = await stateRepository.find();

    return states || null;
  }
}

export default IndexStateService;
