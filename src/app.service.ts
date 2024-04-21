import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE_ORM } from './core/constants/db.constants';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '@app/modules/drizzle/schema';

@Injectable()
export class AppService {
  constructor(
    @Inject(DRIZZLE_ORM) private conn: PostgresJsDatabase<typeof schema>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getUser() {
    console.log(this.conn);
    // return 'test'
    return this.conn.select().from(schema.users);
  }
}
