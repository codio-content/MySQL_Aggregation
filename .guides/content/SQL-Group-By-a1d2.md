So far, we've been using independent SQL aggregate functions and _joins_ with products with the same `id`. 

What if we want to make calculations of different `product_id` values, _join_ them and display them in the same resulting query?

### Getting the average rating of each product in the wishlist

To better exemplify this scenario, let's have another look to the result of joining the `e_store.products` table and the `e_store.reviews` table:

```
mysql> SELECT products.id, name, stars 
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id;
```

```
+----+------------+-------+
| id | name       | stars |
+----+------------+-------+
|  1 | Tablet     |     5 |
|  1 | Tablet     |     3 |
|  2 | Smartphone |     1 |
|  2 | Smartphone |     4 |
|  2 | Smartphone |     2 |
|  3 | PC         |     3 |
|  4 | Headphones |     2 |
|  4 | Headphones |     5 |
|  6 | Monitor    |     5 |
+----+------------+-------+
```

Now, let's imagine that the user adds 2 products to the wishlist: `product_id` `2` (Smartphone) and `product_id` `4` (Headphones).

Continue in the next section.