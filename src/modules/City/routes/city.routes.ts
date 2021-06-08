import {Router} from 'express';

import auth from '../../../shared/middlewares/ensureAuthenticated';
import CityController from '../controllers/CityController';

const routes = Router();

routes.get('/', CityController.index);

routes.use(auth);
routes.post('/', CityController.create);
routes.put('/:cityId', CityController.update);
routes.delete('/:cityId', CityController.delete);

export default routes;
