import {Request, Response} from 'express';

import CreateStateService from '../services/CreateStateService';
import DeleteStateService from '../services/DeleteStateService';
import UpdateStateService from '../services/UpdateStateService';
import IndexStateService from '../services/IndexStateService';

class StateController {
  public async index(req: Request, res: Response) {
    const indexState = new IndexStateService();

    const states = indexState.execute();

    return res.json(states);
  }

  public async create(req: Request, res: Response) {
    const stateBody = req.body;

    const createState = new CreateStateService();

    const state = await createState.execute(stateBody);

    return res.json(state);
  }

  public async delete(req: Request, res: Response) {
    const {state_id} = req.params;

    const deleteState = new DeleteStateService();

    const stateDeleted = await deleteState.execute(state_id);

    return res.json(stateDeleted);
  }

  public async update(req: Request, res: Response) {
    const {state_id} = req.params;
    const stateBody = req.body;

    const updateState = new UpdateStateService();

    const state = await updateState.execute(state_id, stateBody);

    return res.json(state);
  }
}

export default new StateController();
