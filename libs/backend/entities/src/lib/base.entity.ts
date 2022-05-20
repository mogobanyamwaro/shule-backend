import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  BaseEntity as Base,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity extends Base {
  @PrimaryColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updateAt: Date;
}
