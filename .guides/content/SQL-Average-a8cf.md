So far, we've learned how to apply the `MIN()` and `MAX()` SQL aggregate functions to our `SELECT` queries.

The next use case will be: 

### Get the average rating of the product

Let's suppose that the user is inside the single-product view of the _Smartphone_ product, so the user-interface needs to display the average rating (in this case the average number of stars) of this product.

We know that the _Smartphone_ `product_id` equals `2`.

`USE` the `e_store` database and execute a SQL `JOIN` multi-line statement that displays the `products.id`, `products.name` and `reviews.stars` for `product_id` = `2`: 

```
mysql> SELECT 
    -> products.id, products.name, reviews.stars 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE products.id = 2;
```

And you should see this:

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

---
When 2 columns in a `JOIN` statement have a name in common, you may get an `ERROR 1052`  code.

Learn more in the next section.