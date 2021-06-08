import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import ClientRepository from '../repositories/ClientRepository';

interface IResponse {
  status: boolean;
}

class DeleteClientService {
  public async execute(id: string): Promise<IResponse> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne({
      where: {id},
    });

    if (!client) throw new AppError('Cliente não existe.');

    await clientRepository.delete(client);

    return {status: true};
  }
}

export default DeleteClientService;
