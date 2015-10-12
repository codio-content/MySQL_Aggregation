|||warning
### Ambiguous `id` columns

In the previous SQL `JOIN` statement, notice that we are specifying the `products.id` column after the `SELECT` keyword:

```
mysql> SELECT 
    -> products.id, products.name, reviews.stars 
    ...
```

This is because the `e_store.reviews` table also has an `id` column. 

Specifying the table and column with the dot syntax will avoid the following error: 

```
ERROR 1052 (23000): Column 'id' in field list is ambiguous
```

|||