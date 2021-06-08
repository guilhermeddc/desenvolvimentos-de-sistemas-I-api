import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import Client from '../models/Client';
import ClientRepository from '../repositories/ClientRepository';

interface IRequest {
  name: string;
  active: boolean;
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  website: string;
  activity_id: number;
  city_id: number;
}

class CreateClientService {
  public async execute({
    name,
    active,
    email,
    phone,
    address,
    whatsapp,
    facebook,
    instagram,
    website,
    activity_id,
    city_id,
  }: IRequest): Promise<Client | null> {
    const clientRepository = getCustomRepository(ClientRepository);

    const clientExists = await clientRepository.findOne({
      where: {email},
    });

    if (!clientExists) throw new AppError('Cliente já existe.');

    const client = clientRepository.create({
      name,
      active,
      email,
      phone,
      address,
      whatsapp,
      facebook,
      instagram,
      website,
      activity_id,
      city_id,
    });

    await clientRepository.save(client);

    return client || null;
  }
}

export default CreateClientService;
