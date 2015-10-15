In the `mysql>` prompt, type the SQL `SELECT` query that represents the previous list:

```
mysql> SELECT products.id, products.name, 
    -> AVG(stars) AS avg_stars 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE products.id < 6 
    -> GROUP BY products.name HAVING avg_stars < 4;
```

And you should see this: 

```
+----+------------+-----------+
| id | name       | avg_stars |
+----+------------+-----------+
|  4 | Headphones |    3.5000 |
|  3 | PC         |    3.0000 |
|  2 | Smartphone |    2.3333 |
+----+------------+-----------+
3 rows in set (0.02 sec)
```

---
Learn some important differences between `WHERE` and `GROUP BY` in the next section.