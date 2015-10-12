### `COUNT()` the number of `stars` fields where `product_id` equals `2`

In your `mysql>` command line: 

```
mysql> SELECT products.id, name, COUNT(stars) 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE product_id = 2;
```

And you should see this: 

```
+----+------------+--------------+
| id | name       | COUNT(stars) |
+----+------------+--------------+
|  2 | Smartphone |            3 |
+----+------------+--------------+
1 row in set (0.00 sec)
```

Finally

### Divide the `SUM(stars)` by the total `COUNT(stars)` of `product_id` = `2` fields

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

---
Continue in the next section.