import {EntityRepository, Repository} from 'typeorm';

import City from '../models/City';

@EntityRepository(City)
class CityRepository extends Repository<City> {
  public async findByName(name: string): Promise<City | null> {
    const findCity = await this.findOne({
      where: {name},
    });

    return findCity || null;
  }
}

export default CityRepository;
