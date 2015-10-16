{Check It!|assessment}(test-2188673486)


|||guidance
### In the `sql-6-9.sql` file:

```
USE e_store;

SELECT products.id, name, 
AVG(stars) AS avg_stars 
FROM products 
JOIN reviews 
ON products.id = reviews.product_id 
GROUP BY products.id HAVING avg_stars <= 3;
```

|||
