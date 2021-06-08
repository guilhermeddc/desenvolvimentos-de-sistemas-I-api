import {getCustomRepository} from 'typeorm';

import Activity from '../models/Activity';
import ActivityRepository from '../repositories/ActivityRepository';

interface IRequest {
  name: string;
}

class CreateActivityService {
  public async execute({name}: IRequest): Promise<Activity | null> {
    const activityRepository = getCustomRepository(ActivityRepository);

    const activity = activityRepository.create({
      name,
    });

    await activityRepository.save(activity);

    return activity || null;
  }
}

export default CreateActivityService;
