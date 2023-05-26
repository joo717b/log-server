import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  context: string;

  @CreateDateColumn()
  created: Date;

  @ManyToOne(() => User, (user) => user.logs, { nullable: false })
  user: User;
}
