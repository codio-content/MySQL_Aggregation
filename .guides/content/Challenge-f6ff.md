{Check It!|assessment}(test-3982292097)

|||guidance
### In the `sql-6-4.sql` file:

```
USE e_store;

SELECT products.id, 
products.name AS product_name, 
products.price, reviews.stars 
FROM products JOIN reviews 
ON products.id = reviews.product_id 
WHERE products.id = 3 OR products.id = 4;
```

|||
