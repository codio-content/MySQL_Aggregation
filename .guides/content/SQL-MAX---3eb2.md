The second `e_store` use case will be: 

### Get the product with the highest price:

This time, execute this `SELECT` query in the `mysql>` command line, (alias the `MAX(price)` column `AS` `product_max_price`):

```
mysql> SELECT MAX(price) AS product_max_price
    -> FROM e_store.products;
```

And you should see this:

```
+-------------------+
| product_max_price |
+-------------------+
|            157.40 |
+-------------------+
1 row in set (0.01 sec)
```

---
Complete a challenge on SQL `MAX()` functions in the next section.