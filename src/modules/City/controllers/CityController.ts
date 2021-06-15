import {Request, Response} from 'express';

import CreateCityService from '../services/CreateCityService';
import DeleteCityService from '../services/DeleteCityService';
import IndexCityService from '../services/IndexCityService';
import UpdateCityService from '../services/UpdateCityService';
import IndexCityByStateService from '../services/IndexCityByStateService';

class CityController {
  public async index(request: Request, response: Response) {
    const indexCity = new IndexCityService();

    const cities = await indexCity.execute();

    return response.json(cities);
  }

  public async indexByState(request: Request, response: Response) {
    const {state_id} = request.params;

    const indexCity = new IndexCityByStateService();

    const cities = await indexCity.execute(state_id);

    return response.json(cities);
  }

  public async create(request: Request, response: Response) {
    const cityBody = request.body;

    const createCity = new CreateCityService();

    const city = await createCity.execute(cityBody);

    return response.json(city);
  }

  public async delete(request: Request, response: Response) {
    const {city_id} = request.params;

    const deleteCity = new DeleteCityService();

    const cityDeleted = await deleteCity.execute(city_id);

    return response.json(cityDeleted);
  }

  public async update(request: Request, response: Response) {
    const {city_id} = request.params;
    const cityBody = request.body;

    const updateCity = new UpdateCityService();

    const city = await updateCity.execute(city_id, cityBody);

    return response.json(city);
  }
}

export default new CityController();
