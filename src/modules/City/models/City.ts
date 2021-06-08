import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import State from '../../State/models/State';

@Entity('cities')
class City {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  state_id: number;

  @ManyToOne(type => State, state => State)
  @JoinColumn({name: 'state_id'})
  state: State;
}

export default City;
