import {Request, Response} from 'express';

import CreateActivityService from '../services/CreateActivityService';
import DeleteActivityService from '../services/DeleteActivityService';
import IndexActivityService from '../services/IndexActivityService';
import UpdateActivityService from '../services/UpdateActivityService';

class ActivityController {
  public async index(req: Request, res: Response) {
    const indexActivity = new IndexActivityService();

    const activities = indexActivity.execute();

    return res.json(activities);
  }

  public async create(request: Request, response: Response) {
    const activityBody = request.body;

    const createActivity = new CreateActivityService();

    const activity = await createActivity.execute(activityBody);

    return response.json(activity);
  }

  public async delete(req: Request, res: Response) {
    const {activityId} = req.params;

    const deleteActivity = new DeleteActivityService();

    const activityDeleted = await deleteActivity.execute(activityId);

    return res.json(activityDeleted);
  }

  public async update(req: Request, res: Response) {
    const {activityId} = req.params;
    const activityBody = req.body;

    const updateActivity = new UpdateActivityService();

    const activity = await updateActivity.execute(activityId, activityBody);

    return res.json(activity);
  }
}

export default new ActivityController();
