import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('states')
class State {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  uf: string;
}

export default State;
