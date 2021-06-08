import {Request, Response} from 'express';

import CreateClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import IndexClientService from '../services/IndexClientService';
import UpdateClientService from '../services/UpdateClientService';

class ClientController {
  public async index(req: Request, res: Response) {
    const indexClient = new IndexClientService();

    const cities = indexClient.execute();

    return res.json(cities);
  }

  public async create(request: Request, response: Response) {
    const clientBody = request.body;

    const createClient = new CreateClientService();

    const client = await createClient.execute(clientBody);

    return response.json(client);
  }

  public async delete(req: Request, res: Response) {
    const {clientId} = req.params;

    const deleteClient = new DeleteClientService();

    const clientDeleted = await deleteClient.execute(clientId);

    return res.json(clientDeleted);
  }

  public async update(req: Request, res: Response) {
    const {clientId} = req.params;
    const clientBody = req.body;

    const updateClient = new UpdateClientService();

    const client = await updateClient.execute(clientId, clientBody);

    return res.json(client);
  }
}

export default new ClientController();
