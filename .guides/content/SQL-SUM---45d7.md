The result of the previous SQL `JOIN` statement is: 

```
+----+------------+-------+
| id | name       | stars |
+----+------------+-------+
|  2 | Smartphone |     1 |
|  2 | Smartphone |     4 |
|  2 | Smartphone |     2 |
+----+------------+-------+
3 rows in set (0.01 sec)
```

In order to get the stars average we need to: 

1. `SUM()` the number of `stars` in each row
2. `COUNT()` the number of `stars` fields where `product_id` equals `2`
3. Divide the `SUM(stars)` by the total `COUNT(stars)` of `product_id` = `2` fields 

### `SUM()` the number of stars in each row 

In your `mysql>` command line: 

```
mysql> SELECT products.id, name, SUM(stars) 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE products.id = 2;
```

And you should see this:

```
+----+------------+------------+
| id | name       | SUM(stars) |
+----+------------+------------+
|  2 | Smartphone |          7 |
+----+------------+------------+
1 row in set (0.00 sec)
```

---
Complete a challenge on SQL `SUM()` aggregate function in the next section and then continue with getting the total `COUNT()` of fields where the `product_id` equals `2`.