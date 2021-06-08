import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('activities')
class Activity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}

export default Activity;
