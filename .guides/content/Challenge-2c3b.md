{Check It!|assessment}(test-3147153916)


|||guidance
### In the `sql-6-7.sql` file:

```
USE e_store;

SELECT products.id, 
SUM(stars)/COUNT(stars) AS avg_rating 
FROM products JOIN reviews 
ON products.id = reviews.product_id 
WHERE products.id = 4;
```

|||
