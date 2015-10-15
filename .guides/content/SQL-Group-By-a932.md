Let's keep practicing the `GROUP BY` SQL statement.

This time, _group_ the previous SQL `JOIN` by `products.name` to see the difference: 

```
mysql> SELECT products.id, name, 
    -> AVG(stars) AS avg_stars 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE reviews.product_id = 2 OR reviews.product_id = 4 
    -> GROUP BY products.name;
```

And you should see this:

```
+----+------------+-----------+
| id | name       | avg_stars |
+----+------------+-----------+
|  4 | Headphones |    3.5000 |
|  2 | Smartphone |    2.3333 |
+----+------------+-----------+
2 rows in set (0.01 sec)
```

Extend the SQL `GROUP BY` statement usage in the next section.