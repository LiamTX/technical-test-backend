import { table } from "console";
import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary().notNullable();
        table.string('nickname', 100).notNullable();
        table.string('email', 200);
        table.string('password').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

