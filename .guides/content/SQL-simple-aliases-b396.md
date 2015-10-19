The result of the previous `SELECT MIN(price) FROM e_store.products;` statement is this: 

```
+------------+
| MIN(price) |
+------------+
|      20.00 |
+------------+
1 row in set (0.02 sec)
```

SQL aliases allow us to change the column names in a `SELECT` query for clarity and efficiency. 

### Aliasing the `MIN(price)` column name

This time, execute the same `SELECT` query in the `mysql>` command line to get the lowest price of the `e_store.products` table and add a _SQL alias_ using the `AS` keyword:

```
mysql> SELECT MIN(price) AS minimum_product_price
    -> FROM e_store.products;
```

As you can see, after the `AS` keyword, we are adding the `minimum_product_price` name to display the same results but in this format: 

```
+-----------------------+
| minimum_product_price |
+-----------------------+
|                 20.00 |
+-----------------------+
1 row in set (0.01 sec)
```

---
Let's get more specific using the `MIN()` function and the `WHERE` keyword.