import { table } from "console";
import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cars', table => {
        table.increments('id').notNullable();
        table.string('brand').notNullable();
        table.string('model').notNullable();
        table.string('name').notNullable();
        table.date('fabrication_date').notNullable();
        table.decimal('price').notNullable();
        table.string('color').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cars')
}

