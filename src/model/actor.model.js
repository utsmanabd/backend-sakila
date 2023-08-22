const sakila = require('./../database/sakila.config');

getAll = async () => await sakila.select('*').from('actor').where('status', 1);

getById = async ( id) => await sakila.select('*').from('actor').where('actor_id', id);

getWhere = async (column, value) => await sakila.select('*').from('actor').where(column, value);

insert = async (data) => await sakila('actor').insert(data);

update = async (id, data) => await sakila('actor').where('actor_id', id).update(data);

deleteData = async (id) => await sakila('actor').where('actor_id', id).del();

getFilmActor = async () => {
    return await sakila.raw(`
    SELECT f.title AS title,
    GROUP_CONCAT(CONCAT(a.first_name, ' ', a.last_name)) AS list_actor
    FROM film_actor fa
    JOIN film f ON fa.film_id = f.film_id
    JOIN actor a ON fa.actor_id = a.actor_id
    GROUP BY f.title;
    `)
}

module.exports = {
    getAll,
    getById,
    getWhere,
    insert,
    update,
    deleteData,
    getFilmActor
};