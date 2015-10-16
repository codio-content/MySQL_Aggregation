{Check It!|assessment}(test-2216583671)

|||guidance
### In the `sql-6-8.sql` file:

```
USE e_store;

SELECT products.id, AVG(stars) 
FROM products JOIN reviews 
ON products.id = reviews.product_id 
WHERE products.id = 4;
```

|||
