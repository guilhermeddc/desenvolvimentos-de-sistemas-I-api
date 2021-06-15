import {getCustomRepository} from 'typeorm';
import path from 'path';
import fs from 'fs';

import Client from '../models/Client';
import AppError from '../../../shared/errors/AppError';
import ClientRepository from '../repositories/ClientRepository';
import {tmpFolder} from '../../../config/upload';

interface IRequest {
  client_id: string;
  filename: string;
}

class UpdateClientLogo {
  public async execute({client_id, filename}: IRequest): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne({
      where: {id: client_id},
    });

    if (!client) throw new AppError('Usuário inexistente', 401);

    if (client.logo) {
      const clientLogoFilePath = path.join(tmpFolder, client.logo);
      const clientLogoFileExists = await fs.promises.stat(clientLogoFilePath);

      if (clientLogoFileExists) {
        await fs.promises.unlink(clientLogoFilePath);
      }
    }

    client.logo = `${process.env.APP_URL}/files/${filename}`;

    await clientRepository.save(client);

    return client;
  }
}

export default UpdateClientLogo;
