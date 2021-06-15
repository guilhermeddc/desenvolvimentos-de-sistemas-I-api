import {getCustomRepository} from 'typeorm';

import Activity from '../models/Activity';
import ActivityRepository from '../repositories/ActivityRepository';

class IndexActivityService {
  public async execute(): Promise<Activity[] | null> {
    const activityRepository = getCustomRepository(ActivityRepository);

    const activities = await activityRepository.find({
      order: {
        name: 'ASC',
      },
    });

    return activities || null;
  }
}

export default IndexActivityService;
