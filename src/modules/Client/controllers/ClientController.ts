import {Request, Response} from 'express';

import CreateClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import IndexClientService from '../services/IndexClientService';
import UpdateClientService from '../services/UpdateClientService';
import IndexClientByCityService from '../services/IndexClientByCityService';
class ClientController {
  public async index(req: Request, res: Response) {
    const indexClient = new IndexClientService();

    const cities = indexClient.execute();

    return res.json(cities);
  }

  public async indexByState(req: Request, res: Response) {
    const {city_id} = req.params;

    const indexClient = new IndexClientByCityService();

    const clients = indexClient.execute(city_id);

    return res.json(clients);
  }

  public async create(request: Request, response: Response) {
    const clientBody = request.body;

    const createClient = new CreateClientService();

    const client = await createClient.execute(clientBody);

    return response.json(client);
  }

  public async delete(req: Request, res: Response) {
    const {client_id} = req.params;

    const deleteClient = new DeleteClientService();

    const clientDeleted = await deleteClient.execute(client_id);

    return res.json(clientDeleted);
  }

  public async update(req: Request, res: Response) {
    const {client_id} = req.params;
    const clientBody = req.body;

    const updateClient = new UpdateClientService();

    const client = await updateClient.execute(client_id, clientBody);

    return res.json(client);
  }
}

export default new ClientController();
