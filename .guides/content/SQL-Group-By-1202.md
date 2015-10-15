The wishlist has currently 2 products: `product_id` `2` (Smartphone) and `product_id` `4` (Headphones). 

Let's try to get the `AVG(stars)` for each of them with a single SQL `JOIN` statement.

In your `mysql>` command line: 

```
mysql> SELECT products.id, name, AVG(stars)
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE reviews.product_id = 2 OR reviews.product_id = 4;
```

The aforementioned query should output this:

```
+----+------------+------------+
| id | name       | AVG(stars) |
+----+------------+------------+
|  2 | Smartphone |     2.8000 |
+----+------------+------------+
1 row in set (0.00 sec)
```

However we expected both products, the Smartphone and the Headphones to be in the resulting table.

---
Learn how to get the desired output in the next section.