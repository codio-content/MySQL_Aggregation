Just as the SQL `WHERE` keyword lets us create conditional statements, the `GROUP BY` - `HAVING` statement lets us _filter_ the result of `SELECT` queries that use _joins_ and _aggregate functions_.

Take a look at the following example. We are removing the SQL `WHERE` statement to get the average of `stars` of all products:

```
mysql> SELECT products.id, name, 
    -> AVG(stars) AS avg_stars 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> GROUP BY products.id;
```

And you should see this: 

```
+----+------------+-----------+
| id | name       | avg_stars |
+----+------------+-----------+
|  1 | Tablet     |    4.0000 |
|  2 | Smartphone |    2.3333 |
|  3 | PC         |    3.0000 |
|  4 | Headphones |    3.5000 |
|  6 | Monitor    |    5.0000 |
+----+------------+-----------+
5 rows in set (0.00 sec)
```

Continue in the next section.