import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import ActivityRepository from '../repositories/ActivityRepository';

interface IResponse {
  status: boolean;
}

class DeleteActivityService {
  public async execute(id: string): Promise<IResponse> {
    const activityRepository = getCustomRepository(ActivityRepository);

    const activity = await activityRepository.findOne({
      where: {id},
    });

    if (!activity) throw new AppError('Cidade não existe.');

    await activityRepository.delete(activity);

    return {status: true};
  }
}

export default DeleteActivityService;
