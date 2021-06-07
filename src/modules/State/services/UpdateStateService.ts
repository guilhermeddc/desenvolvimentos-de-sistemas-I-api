import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import State from '../models/State';
import StateRepository from '../repositories/StateRepository';

interface IRequest {
  name: string;
  uf: string;
}

class UpdateStateService {
  public async execute(
    id: string,
    {name, uf}: IRequest,
  ): Promise<State | null> {
    const stateRepository = getCustomRepository(StateRepository);

    const state = await stateRepository.findOne({
      where: {id},
    });

    if (!state) throw new AppError('Estado inexistente', 401);

    if (name) state.name = name;
    if (uf) state.uf = uf;

    await stateRepository.save(state);

    return state || null;
  }
}

export default UpdateStateService;
