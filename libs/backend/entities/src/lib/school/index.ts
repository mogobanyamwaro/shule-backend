import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { EducationalLevel, SchoolEducationalSystem } from './enums';

@Entity('school')
export class School extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({
    name: 'educational_system',
    enum: SchoolEducationalSystem,
    default: SchoolEducationalSystem.Kenyan_8_4_4,
  })
  educationalSystem: SchoolEducationalSystem;

  @Column({
    name: 'educational_level',
    enum: EducationalLevel,
    default: EducationalLevel.Pre_Primary,
  })
  educationalLevel: EducationalLevel;

  @Column({ name: 'location' })
  location: string;

  @Column({ name: 'about' })
  about: string;

  @Column({ name: 'attachments' })
  attachments: string[];

  @Column({ name: 'performance' })
  performance: number;

  @Column({ name: 'licences' })
  licences: string[];

  @Column({ name: 'contact' })
  contact: string;
}
