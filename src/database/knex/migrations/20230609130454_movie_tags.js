
exports.up = knex => knex.schema.createTable("tags", table =>{
    table.increments('id').primary();
    table.integer('notes_id').references('id').inTable('notes').OnDelete('CASCADE');
    table.integer('users_id').references('id').inTable('users');
    table.text('name').notNullable();
});

exports.down = knex => knex.schema.dropTable("tags");
