import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import State from '../models/State';
import StateRepository from '../repositories/StateRepository';

interface IRequest {
  name: string;
  uf: string;
}

class CreateStateService {
  public async execute({name, uf}: IRequest): Promise<State | null> {
    const stateRepository = getCustomRepository(StateRepository);

    const stateExists = await stateRepository.findByName(name);

    if (stateExists) throw new AppError('Estado jé existe', 400);

    const state = stateRepository.create({
      name,
      uf,
    });

    await stateRepository.save(state);

    return state || null;
  }
}

export default CreateStateService;
