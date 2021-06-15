import {Request, Response} from 'express';

import CreateActivityService from '../services/CreateActivityService';
import DeleteActivityService from '../services/DeleteActivityService';
import IndexActivityService from '../services/IndexActivityService';
import UpdateActivityService from '../services/UpdateActivityService';

class ActivityController {
  public async index(request: Request, response: Response) {
    const indexActivity = new IndexActivityService();

    const activities = await indexActivity.execute();

    console.log(activities);

    return response.json(activities);
  }

  public async create(request: Request, response: Response) {
    const activityBody = request.body;

    const createActivity = new CreateActivityService();

    const activity = await createActivity.execute(activityBody);

    return response.json(activity);
  }

  public async delete(request: Request, response: Response) {
    const {activity_id} = request.params;

    const deleteActivity = new DeleteActivityService();

    const activityDeleted = await deleteActivity.execute(activity_id);

    return response.json(activityDeleted);
  }

  public async update(request: Request, response: Response) {
    const {activity_id} = request.params;
    const activityBody = request.body;

    const updateActivity = new UpdateActivityService();

    const activity = await updateActivity.execute(activity_id, activityBody);

    return response.json(activity);
  }
}

export default new ActivityController();
