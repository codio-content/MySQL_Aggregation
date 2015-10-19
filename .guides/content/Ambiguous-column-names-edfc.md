|||warning
### Ambiguous `id` columns

In the previous SQL `JOIN` statement, notice that we are specifying the `products.id` column after the `SELECT` keyword:

```
mysql> SELECT 
    -> products.id, products.name, reviews.stars 
    ...
```

This is because the `e_store.reviews` table also has an `id` column.

If you get the following error:

```
ERROR 1052 (23000): Column 'id' in field list is ambiguous
```

You may avoid it either by:

1. Specifying the table and column with the dot syntax
2. Defining more specific column names for `id` fields when creating tables. Such as `product_id` or `review_id`

|||