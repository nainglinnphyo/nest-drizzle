import { Inject, Injectable } from '@nestjs/common';
import * as schema from '../drizzle/schema';
import { DRIZZLE_ORM } from '@app/core/constants/db.constants';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DRIZZLE_ORM) private conn: PostgresJsDatabase<typeof schema>,
  ) {}

  async findAll() {
    return this.conn.query.users.findMany({
      where;
    });
  }
}
