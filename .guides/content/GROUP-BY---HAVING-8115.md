In order to filter the result of _aggregate functions_ and _joins_ in the previous `SELECT` query, we complemented the `GROUP BY` statement with the the `HAVING` keyword: 

```
GROUP BY products.id HAVING avg_stars > 3;
```

It is possible to create multiple filters in a single `SELECT` query by using both `WHERE` and `GROUP BY` - `HAVING` statements. 

Let's translate the following list into a `SELECT` statement:

1. `JOIN` the `products.id`, `products.name` columns with the `reviews.stars` column
2. _Alias_ the _average_ of the `reviews.stars` column `AS` `avg_stars`
3. Display the resulting join only `WHERE` `products.id` is lower than `6`
4. _Group_ the resulting join _by_ `products.name`
5. Display only the rows that _have_ an `avg_stars` value lower than `4`

---
Continue in the next section.