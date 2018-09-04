exports.up = knex =>
  knex.schema.createTable('attribute', t => {
    t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    t.uuid('place_id').notNull().references('place.id');
    t.string('type').notNull();
    t.json('data').notNull();
    t.dateTime('created_at').notNull().defaultTo(knex.raw('now()'));
    t.dateTime('updated_at').notNull().defaultTo(knex.raw('now()'));
  });

exports.down = knex =>
  knex.schema.dropTable('attribute');
