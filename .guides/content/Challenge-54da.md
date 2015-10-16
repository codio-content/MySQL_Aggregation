{Check It!|assessment}(test-2082641079)

|||guidance
### In the `sql-6-5.sql` file:

```
USE e_store;

SELECT 
SUM(stock) AS total_stock 
FROM products;

SELECT products.id, 
SUM(stars) as total_stars 
FROM products 
JOIN reviews ON products.id = reviews.product_id 
WHERE products.id = 4;
```

|||
