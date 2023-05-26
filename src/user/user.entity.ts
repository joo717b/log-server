import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Log } from 'src/log/log.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created: Date;

  @OneToMany(() => Log, (log) => log.user)
  logs: Log[];
}
