{Check It!|assessment}(test-3390707296)


|||guidance
### In the `sql-6-12.sql` file:

```
USE e_store;

SELECT name, price, stock, 
AVG(stars) AS avg_stars 
FROM products 
JOIN reviews 
ON products.id = reviews.product_id 
WHERE stock > 1 
GROUP BY products.id HAVING avg_stars >= 3;
```

|||