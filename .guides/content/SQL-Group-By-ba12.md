Even though we requested two `product_id`'s (`2` and `4`) in the previous example, we only got the result where `product_id` = `2`.

### Introducing SQL `GROUP BY` statement

The `GROUP BY` statement is used in conjunction with SQL aggregate functions to __group the result-set by one or more columns__.

To better understand this, let's extend our previous SQL `JOIN` statement with the `GROUP BY` statement.

Important things to notice: 

- The alias for the `AVG(stars)` column name is `avg_stars`
- The resulting set is _grouped by_ the `products.id` column and will determine the sorting order

```
mysql> SELECT products.id, name, 
    -> AVG(stars) AS avg_stars 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE reviews.product_id = 2 OR reviews.product_id = 4 
    -> GROUP BY products.id;
```

And you should see this: 

```
+----+------------+-----------+
| id | name       | avg_stars |
+----+------------+-----------+
|  2 | Smartphone |    2.3333 |
|  4 | Headphones |    3.5000 |
+----+------------+-----------+
2 rows in set (0.00 sec)
```

---
Understand the SQL `GROUP BY` statement better in the following section.