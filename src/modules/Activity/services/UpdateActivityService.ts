import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import Activity from '../models/Activity';
import ActivityRepository from '../repositories/ActivityRepository';

interface IRequest {
  name: string;
}

class UpdateActivityService {
  public async execute(id: string, {name}: IRequest): Promise<Activity | null> {
    const activityRepository = getCustomRepository(ActivityRepository);

    const activity = await activityRepository.findOne({
      where: {id},
    });

    if (!activity) throw new AppError('Atividade inexistente', 401);

    if (name) activity.name = name;

    await activityRepository.save(activity);

    return activity || null;
  }
}

export default UpdateActivityService;
