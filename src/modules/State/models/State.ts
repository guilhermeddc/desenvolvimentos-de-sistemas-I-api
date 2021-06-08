import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

import City from '../../City/models/City';

@Entity('states')
class State {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(type => City, cities => City)
  cities: City[];

  @Column()
  uf: string;
}

export default State;
