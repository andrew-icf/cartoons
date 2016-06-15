
exports.up = function(knex, Promise) {
  return knex.schema.createTable('toon', function(table) {
    table.increments();
    table.text('name');
    table.integer('year');
    table.text('network');
    table.text('image');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('toon');
};
