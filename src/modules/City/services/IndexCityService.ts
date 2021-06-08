import {getCustomRepository} from 'typeorm';

import City from '../models/City';
import CityRepository from '../repositories/CityRepository';

class IndexCityService {
  public async execute(): Promise<City[] | null> {
    const cityRepository = getCustomRepository(CityRepository);

    const cities = await cityRepository.find();

    return cities || null;
  }
}

export default IndexCityService;
