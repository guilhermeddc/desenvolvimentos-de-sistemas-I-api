import {Request, Response} from 'express';

import CreateCityService from '../services/CreateCityService';
import DeleteCityService from '../services/DeleteCityService';
import IndexCityService from '../services/IndexCityService';
import UpdateCityService from '../services/UpdateCityService';

class CityController {
  public async index(req: Request, res: Response) {
    const indexCity = new IndexCityService();

    const cities = indexCity.execute();

    return res.json(cities);
  }

  public async create(request: Request, response: Response) {
    const cityBody = request.body;

    const createCity = new CreateCityService();

    const city = await createCity.execute(cityBody);

    return response.json(city);
  }

  public async delete(req: Request, res: Response) {
    const {cityId} = req.params;

    const deleteCity = new DeleteCityService();

    const cityDeleted = await deleteCity.execute(cityId);

    return res.json(cityDeleted);
  }

  public async update(req: Request, res: Response) {
    const {cityId} = req.params;
    const cityBody = req.body;

    const updateCity = new UpdateCityService();

    const city = await updateCity.execute(cityId, cityBody);

    return res.json(city);
  }
}

export default new CityController();
