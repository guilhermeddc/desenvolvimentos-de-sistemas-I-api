import {getCustomRepository} from 'typeorm';

import City from '../models/City';
import CityRepository from '../repositories/CityRepository';

class IndexCityByStateService {
  public async execute(state_id: string): Promise<City[] | null> {
    const cityRepository = getCustomRepository(CityRepository);

    const cities = await cityRepository.find({
      where: {state_id},
    });

    return cities || null;
  }
}

export default IndexCityByStateService;
