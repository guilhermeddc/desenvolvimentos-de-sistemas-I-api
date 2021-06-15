import {getCustomRepository} from 'typeorm';

import Client from '../models/Client';
import ClientRepository from '../repositories/ClientRepository';

class IndexClientByClientService {
  public async execute(city_id: string): Promise<Client[] | null> {
    const clientRepository = getCustomRepository(ClientRepository);

    const clients = await clientRepository.find({
      where: {city_id},
      order: {
        name: 'ASC',
      },
      relations: ['city', 'activity'],
    });

    return clients || null;
  }
}

export default IndexClientByClientService;
