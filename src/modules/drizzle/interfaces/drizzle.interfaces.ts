import { ModuleMetadata, Type } from '@nestjs/common';
import { DrizzleConfig } from 'drizzle-orm';
import { MigrationConfig } from 'drizzle-orm/migrator';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export type PostgresJsDb = NodePgDatabase;

export interface NestDrizzleOptions {
  driver: 'postgres-js';
  url: string;
  options?: DrizzleConfig<Record<string, unknown>>;
  migrationOptions?: MigrationConfig;
}

export interface NestDrizzleOptionsFactory {
  createNestDrizzleOptions(): Promise<NestDrizzleOptions> | NestDrizzleOptions;
}

export interface NestDrizzleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<NestDrizzleOptionsFactory>;
  useClass?: Type<NestDrizzleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NestDrizzleOptions> | NestDrizzleOptions;
}
