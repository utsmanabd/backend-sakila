const db = require("../database/sakila.config");

getCountByRating = async () => {
  return await db.raw(`
            SELECT rating, COUNT(film_id) as movie_count FROM film GROUP BY rating;
        `);
};
getCountBySpecialFeatures = async () => {
  return await db.raw(`
            SELECT tag_name as feature, COUNT(film_id) AS movie_count
            FROM (
            SELECT film_id, SUBSTRING_INDEX(SUBSTRING_INDEX(special_features, ',', t.n), ',', -1) AS tag_name
            FROM film
            CROSS JOIN (
                SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3
            ) AS t
            WHERE CHAR_LENGTH(special_features) - CHAR_LENGTH(REPLACE(special_features, ',', '')) >= t.n - 1
            ) AS subquery
            GROUP BY tag_name;
        `);
};
getTopCustomer = async () => {
  return await db.raw(`
            SELECT customer.customer_id, customer.first_name, COUNT(rental.rental_id) as rental_count
            FROM customer
            JOIN rental ON customer.customer_id = rental.customer_id
            GROUP BY customer.customer_id, customer.first_name
            ORDER BY rental_count DESC
            LIMIT 10;;
        `);
};
getTotalFilmByCategoryPercentage = async () => {
  return await db.raw(`
            SELECT category.name AS category_name,
            COUNT(film.film_id) AS film_count,
            ROUND((COUNT(film.film_id) * 100.0) / (SELECT COUNT(*) FROM film), 2) AS percentage
            FROM film
            JOIN film_category ON film.film_id = film_category.film_id
            JOIN category ON film_category.category_id = category.category_id
            GROUP BY category.name
            ORDER BY percentage DESC;
        `);
};
getFilmByMostActor = async () => {
  return await db.raw(`
            SELECT film.film_id, film.title, COUNT(*) AS actor_count
            FROM film
            JOIN film_actor ON film.film_id = film_actor.film_id
            GROUP BY film.film_id, film.title
            ORDER BY actor_count DESC
            LIMIT 25;
        `);
};
getTopSpenderCustomer = async () => {
  return await db.raw(`
            SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_payment
            FROM customer AS c
            JOIN payment AS p ON c.customer_id = p.customer_id
            GROUP BY c.customer_id, c.first_name
            ORDER BY total_payment DESC
            LIMIT 10;
        `);
};
getTotalFilmLanguage = async () => {
  return await db.raw(`
            SELECT language.name AS language_name,
            COUNT(f.film_id) AS film_count
            FROM film f
            JOIN language ON f.language_id = language.language_id
            GROUP BY language.name;
        `);
};
getDailyIncome = async () => {
  return await db.raw(`
            SELECT DATE(payment_date) AS transaction_date,
            SUM(amount) AS total_daily_income
            FROM payment
            GROUP BY DATE(payment_date);
        `);
};
getRentalCountByCategory = async () => {
  return await db.raw(`
        SELECT 
            DATE_FORMAT(rental_date, '%Y-%m') AS month,
            category.name AS category,
            COUNT(*) AS rental_count
        FROM 
            rental
        JOIN 
            inventory ON rental.inventory_id = inventory.inventory_id
        JOIN 
            film ON inventory.film_id = film.film_id
        JOIN 
            film_category ON film.film_id = film_category.film_id
        JOIN 
            category ON film_category.category_id = category.category_id
        GROUP BY 
            month, category
        ORDER BY 
            month, category;
      `);
};
getTopRentalDurationFilm = async () => {
  return await db.raw(`
            SELECT f.title AS film_title,
            SUM(TIMESTAMPDIFF(HOUR, r.rental_date, r.return_date)) AS rental_duration_hours
            FROM rental r
            JOIN inventory i ON r.inventory_id = i.inventory_id
            JOIN film f ON i.film_id = f.film_id
            GROUP BY f.film_id, f.title
            ORDER BY rental_duration_hours DESC
            LIMIT 25;
        `);
};

module.exports = {
    getCountBySpecialFeatures,
    getCountByRating,
    getTopCustomer,
    getTotalFilmByCategoryPercentage,
    getFilmByMostActor,
    getTopSpenderCustomer,
    getTotalFilmLanguage,
    getDailyIncome,
    getRentalCountByCategory,
    getTopRentalDurationFilm
};
