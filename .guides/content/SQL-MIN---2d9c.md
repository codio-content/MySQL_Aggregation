The first `e_store` use case will be: 

### Get the product with the lowest price

First, do a `SELECT * FROM e_store.products;` to get all the records from the `e_store.products` table.

Now, let's get the product with the lowest price in the `mysql>` command line:

```
mysql> SELECT MIN(price)
    -> FROM e_store.products;
```

And you should see this: 

```
+------------+
| MIN(price) |
+------------+
|      20.00 |
+------------+
1 row in set (0.02 sec)
```

---

Even though the query is correct, the `MIN(price)` column name doesn't say much.

Learn how to _alias_ column names in the next section.