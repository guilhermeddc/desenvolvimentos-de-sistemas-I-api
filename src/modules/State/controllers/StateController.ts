import {Request, Response} from 'express';

import CreateStateService from '../services/CreateStateService';
import DeleteStateService from '../services/DeleteStateService';
import UpdateStateService from '../services/UpdateStateService';
import IndexStateService from '../services/IndexStateService';

class StateController {
  public async index(request: Request, response: Response) {
    const indexState = new IndexStateService();

    const states = await indexState.execute();

    return response.json(states);
  }

  public async create(request: Request, response: Response) {
    const stateBody = request.body;

    const createState = new CreateStateService();

    const state = await createState.execute(stateBody);

    return response.json(state);
  }

  public async delete(request: Request, response: Response) {
    const {state_id} = request.params;

    const deleteState = new DeleteStateService();

    const stateDeleted = await deleteState.execute(state_id);

    return response.json(stateDeleted);
  }

  public async update(request: Request, response: Response) {
    const {state_id} = request.params;
    const stateBody = request.body;

    const updateState = new UpdateStateService();

    const state = await updateState.execute(state_id, stateBody);

    return response.json(state);
  }
}

export default new StateController();
