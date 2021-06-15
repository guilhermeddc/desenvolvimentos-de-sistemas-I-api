import {getCustomRepository} from 'typeorm';

import Client from '../models/Client';
import ClientRepository from '../repositories/ClientRepository';

class IndexClientService {
  public async execute(): Promise<Client[] | null> {
    const clientRepository = getCustomRepository(ClientRepository);

    const clients = await clientRepository.find({
      order: {
        name: 'ASC',
      },
      relations: ['city', 'activity'],
    });

    return clients || null;
  }
}

export default IndexClientService;
