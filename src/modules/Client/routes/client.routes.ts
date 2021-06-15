import {Router} from 'express';

import auth from '../../../shared/middlewares/ensureAuthenticated';
import ClientController from '../controllers/ClientController';
import upload from '../../../config/upload';

const routes = Router();

routes.get('/', ClientController.index);
routes.get('/cities/:city_id', ClientController.indexByState);

routes.use(auth);
routes.post('/', ClientController.create);
routes.put('/:client_id', ClientController.update);
routes.delete('/:client_id', ClientController.delete);
routes.patch('/:client_id', upload.single('logo'), ClientController.updateLogo);

export default routes;
