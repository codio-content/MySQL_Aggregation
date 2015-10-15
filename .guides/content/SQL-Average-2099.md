Finally

### Divide the `SUM(stars)` by the total `COUNT(stars)` of `product_id` = `2` fields to get the average

In your `mysql>` command line:

```
mysql> SELECT products.id, name, SUM(stars)/COUNT(stars) 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE product_id = 2;
```

And you should see this: 

```
+----+------------+-------------------------+
| id | name       | SUM(stars)/COUNT(stars) |
+----+------------+-------------------------+
|  2 | Smartphone |                  2.3333 |
+----+------------+-------------------------+
1 row in set (0.01 sec)
```

The result of dividing `7` (the total sum of stars) by `3` (the total number of _smartphones_ with stars) is `2.3333`. 

It is possible to _alias_ the `SUM(stars)/COUNT(stars` column name as well:

```
mysql> SELECT products.id, name, 
    -> SUM(stars)/COUNT(stars) AS stars_average
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE product_id = 2;
```

And get this:

```
+----+------------+---------------+
| id | name       | stars_average |
+----+------------+---------------+
|  2 | Smartphone |        2.3333 |
+----+------------+---------------+
1 row in set (0.07 sec)
```

---
Complete a challenge in the next section.