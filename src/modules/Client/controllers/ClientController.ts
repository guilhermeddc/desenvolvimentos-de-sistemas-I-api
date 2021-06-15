import {Request, Response} from 'express';

import CreateClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import IndexClientService from '../services/IndexClientService';
import UpdateClientService from '../services/UpdateClientService';
import IndexClientByCityService from '../services/IndexClientByCityService';
import UpdateClientLogo from '../services/UpdateClientLogo';

class ClientController {
  public async index(request: Request, response: Response) {
    const indexClient = new IndexClientService();

    const cities = await indexClient.execute();

    return response.json(cities);
  }

  public async indexByState(request: Request, response: Response) {
    const {city_id} = request.params;

    const indexClient = new IndexClientByCityService();

    const clients = await indexClient.execute(city_id);

    return response.json(clients);
  }

  public async create(request: Request, response: Response) {
    const clientBody = request.body;

    const createClient = new CreateClientService();

    const client = await createClient.execute(clientBody);

    return response.json(client);
  }

  public async delete(request: Request, response: Response) {
    const {client_id} = request.params;

    const deleteClient = new DeleteClientService();

    const clientDeleted = await deleteClient.execute(client_id);

    return response.json(clientDeleted);
  }

  public async update(request: Request, response: Response) {
    const {client_id} = request.params;
    const clientBody = request.body;

    const updateClient = new UpdateClientService();

    const client = await updateClient.execute(client_id, clientBody);

    return response.json(client);
  }

  public async updateLogo(request: Request, response: Response) {
    const {client_id} = request.params;
    const {filename} = request.file;

    const updateClient = new UpdateClientLogo();

    const client = await updateClient.execute({
      client_id,
      filename,
    });

    return response.json(client);
  }
}

export default new ClientController();
