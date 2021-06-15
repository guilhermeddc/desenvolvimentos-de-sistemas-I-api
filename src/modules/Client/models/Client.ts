import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Activity from '../../Activity/models/Activity';
import City from '../../City/models/City';

@Entity('clients')
class Client {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({default: true})
  active: boolean;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  phone: string;

  @Column({nullable: true})
  logo: string;

  @Column()
  address: string;

  @Column()
  whatsapp: string;

  @Column()
  facebook: string;

  @Column()
  instagram: string;

  @Column()
  website: string;

  @Column()
  activity_id: number;

  @ManyToOne(type => Activity, activity => Activity)
  @JoinColumn({name: 'activity_id'})
  activity: Activity;

  @Column()
  city_id: number;

  @ManyToOne(type => City, city => City)
  @JoinColumn({name: 'city_id'})
  city: City;
}

export default Client;
