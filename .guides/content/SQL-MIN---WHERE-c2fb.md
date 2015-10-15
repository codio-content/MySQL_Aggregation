Because we are working with SQL `SELECT` statements, it is possible to use the `WHERE` clause to make our queries more specific.

This time, let's get the lowest star of a specific `product_id` from the `e_store.reviews` table. 

Do a `SELECT * FROM e_store.reviews;` to see all the records and then, perform the following multi-line statement in the `mysql>` command line: 

```
mysql> SELECT
    -> MIN(stars) AS lowest_star,
    -> product_id
    -> FROM e_store.reviews
    -> WHERE product_id = 4;
```

And you should see this: 

```
+-------------+------------+
| lowest_star | product_id |
+-------------+------------+
|           2 |          4 |
+-------------+------------+
1 row in set (0.01 sec)
```

---
Time to complete your first code challenge.