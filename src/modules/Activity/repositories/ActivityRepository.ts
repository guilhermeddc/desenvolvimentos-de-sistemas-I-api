import {EntityRepository, Repository} from 'typeorm';

import Activity from '../models/Activity';

@EntityRepository(Activity)
class ActivityRepository extends Repository<Activity> {
  public async findByName(name: string): Promise<Activity | null> {
    const findActivity = await this.findOne({
      where: {name},
    });

    return findActivity || null;
  }
}

export default ActivityRepository;
