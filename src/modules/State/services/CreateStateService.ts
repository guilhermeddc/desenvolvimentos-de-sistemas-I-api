import {getCustomRepository} from 'typeorm';

import State from '../models/State';
import StateRepository from '../repositories/StateRepository';

interface IRequest {
  name: string;
  uf: string;
}

class CreateStateService {
  public async execute({name, uf}: IRequest): Promise<State | null> {
    const stateRepository = getCustomRepository(StateRepository);

    const state = stateRepository.create({
      name,
      uf,
    });

    await stateRepository.save(state);

    return state || null;
  }
}

export default CreateStateService;
