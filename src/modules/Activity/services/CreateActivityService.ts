import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import Activity from '../models/Activity';
import ActivityRepository from '../repositories/ActivityRepository';

interface IRequest {
  name: string;
}

class CreateActivityService {
  public async execute({name}: IRequest): Promise<Activity | null> {
    const activityRepository = getCustomRepository(ActivityRepository);

    const activityExists = await activityRepository.findByName(name);

    if (activityExists) throw new AppError('Atividade já existe', 400);

    const activity = activityRepository.create({
      name,
    });

    await activityRepository.save(activity);

    return activity || null;
  }
}

export default CreateActivityService;
