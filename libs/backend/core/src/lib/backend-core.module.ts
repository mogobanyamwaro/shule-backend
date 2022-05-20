import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        synchronize: Boolean(process.env.DB_SYNCHRONIZE),
        logging: process.env.NODE_ENV === 'development',
      }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class BackendCoreModule {}
