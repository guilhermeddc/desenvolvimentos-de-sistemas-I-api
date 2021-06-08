import {Router} from 'express';

import auth from '../../../shared/middlewares/ensureAuthenticated';
import CityController from '../controllers/CityController';

const routes = Router();

routes.get('/', CityController.index);
routes.get('/state/:state_id', CityController.indexByState);

routes.use(auth);
routes.post('/', CityController.create);
routes.put('/:city_id', CityController.update);
routes.delete('/:city_id', CityController.delete);

export default routes;
