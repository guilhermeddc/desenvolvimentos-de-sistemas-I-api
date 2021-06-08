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

class UpdateClientService {
  public async execute(
    id: string,
    {
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
    }: IRequest,
  ): Promise<Client | null> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne({
      where: {id},
    });

    if (!client) throw new AppError('Cidade inexistente', 401);

    if (name) client.name = name;
    if (active) client.active = active;
    if (email) client.email = email;
    if (phone) client.phone = phone;
    if (address) client.address = address;
    if (whatsapp) client.whatsapp = whatsapp;
    if (facebook) client.facebook = facebook;
    if (instagram) client.instagram = instagram;
    if (website) client.website = website;
    if (activity_id) client.activity_id = activity_id;
    if (city_id) client.city_id = city_id;

    await clientRepository.save(client);

    return client || null;
  }
}

export default UpdateClientService;
