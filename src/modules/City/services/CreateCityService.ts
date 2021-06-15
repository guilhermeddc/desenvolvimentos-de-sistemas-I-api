import {getCustomRepository} from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import City from '../models/City';
import CityRepository from '../repositories/CityRepository';

interface IRequest {
  name: string;
  state_id: number;
}

class CreateCityService {
  public async execute({name, state_id}: IRequest): Promise<City | null> {
    const cityRepository = getCustomRepository(CityRepository);

    const cityExists = await cityRepository.findByName(name);

    if (cityExists) throw new AppError('Cidade jé existe', 400);

    const city = cityRepository.create({
      name,
      state_id,
    });

    await cityRepository.save(city);

    return city || null;
  }
}

export default CreateCityService;
