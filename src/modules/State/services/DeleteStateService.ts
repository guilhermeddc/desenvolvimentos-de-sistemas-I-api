import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import StateRepository from '../repositories/StateRepository';

interface IResponse {
  status: boolean;
}

class DeleteStateService {
  public async execute(id: string): Promise<IResponse> {
    const stateRepository = getCustomRepository(StateRepository);

    const state = await stateRepository.findOne({
      where: {id},
    });

    if (!state) throw new AppError('Estado não existe.');

    await stateRepository.delete(state);

    return {status: true};
  }
}

export default DeleteStateService;
