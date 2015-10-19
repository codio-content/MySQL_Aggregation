It is possible to execute a SQL `SELECT` statement that returns two or more columns with different calculations of different table arguments (columns). 

Let's keep working with the `e_store.products` table. 

This time we'll:

- Get the `MIN(price)` and the `MAX(price)` values with a single `SELECT` statement
- Alias each resulting column as `product_min_price` and `product_max_price` respectively
- Get the values only from the `id` `1` to the `id` `5`

In your `mysql>` command line enter: 

```
mysql> SELECT 
    -> MIN(price) AS product_min_price,
    -> MAX(price) AS product_max_price
    -> FROM e_store.products
    -> WHERE id <= 5;
```

And you should see this:

```
+-------------------+-------------------+
| product_min_price | product_max_price |
+-------------------+-------------------+
|             20.00 |            157.40 |
+-------------------+-------------------+
1 row in set (0.02 sec)
```

---
Complete a code challenge in the next section.