### `COUNT()` the number of `stars` fields where `product_id` equals `2`

In your `mysql>` command line, `USE` the `e_store` database and: 

```
mysql> SELECT products.id, name, COUNT(stars) 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE product_id = 2;
```

And you should see this (where `3` is the number of fields that have star values for `product_id` `2`): 

```
+----+------------+--------------+
| id | name       | COUNT(stars) |
+----+------------+--------------+
|  2 | Smartphone |            3 |
+----+------------+--------------+
1 row in set (0.00 sec)
```

---
Complete a challenge on SQL `COUNT()` functions in the next section and proceed to get the average afterwards.