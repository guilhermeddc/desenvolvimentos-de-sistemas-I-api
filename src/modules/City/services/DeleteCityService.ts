import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import CityRepository from '../repositories/CityRepository';

interface IResponse {
  status: boolean;
}

class DeleteCityService {
  public async execute(id: string): Promise<IResponse> {
    const cityRepository = getCustomRepository(CityRepository);

    const city = await cityRepository.findOne({
      where: {id},
    });

    if (!city) throw new AppError('Cidade não existe.');

    await cityRepository.delete(city);

    return {status: true};
  }
}

export default DeleteCityService;
