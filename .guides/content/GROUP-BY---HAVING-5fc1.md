Now, let's add the `HAVING` keyword to the previous statement and learn how you can use conditional operators to filter the result: 

```
mysql> SELECT products.id, name, 
    -> AVG(stars) AS avg_stars 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> GROUP BY products.id HAVING avg_stars > 3;
```

And you should see this: 

```
+----+------------+-----------+
| id | name       | avg_stars |
+----+------------+-----------+
|  1 | Tablet     |    4.0000 |
|  4 | Headphones |    3.5000 |
|  6 | Monitor    |    5.0000 |
+----+------------+-----------+
3 rows in set (0.01 sec)
```

---
Create even a more powerful SQL `SELECT` query adding the `WHERE` keyword before the `GROUP BY` statement in the next section.