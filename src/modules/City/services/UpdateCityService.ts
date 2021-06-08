import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import City from '../models/City';
import CityRepository from '../repositories/CityRepository';

interface IRequest {
  name: string;
  state_id: number;
}

class UpdateCityService {
  public async execute(
    id: string,
    {name, state_id}: IRequest,
  ): Promise<City | null> {
    const cityRepository = getCustomRepository(CityRepository);

    const city = await cityRepository.findOne({
      where: {id},
    });

    if (!city) throw new AppError('Cidade inexistente', 401);

    if (name) city.name = name;
    if (state_id) city.state_id = state_id;

    await cityRepository.save(city);

    return city || null;
  }
}

export default UpdateCityService;
