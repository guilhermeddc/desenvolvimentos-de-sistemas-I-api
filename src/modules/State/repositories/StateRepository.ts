import {EntityRepository, Repository} from 'typeorm';

import State from '../models/State';

@EntityRepository(State)
class StateRepository extends Repository<State> {}

export default StateRepository;
