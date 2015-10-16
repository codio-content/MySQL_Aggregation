{Check It!|assessment}(test-2186222225)

|||guidance
### In the `sql-6-6.sql` file:

```
USE e_store;

SELECT COUNT(*) AS total_product_count FROM products;

SELECT products.id, 
COUNT(stars) as stars_fields_count 
FROM products JOIN reviews 
ON products.id = reviews.product_id 
WHERE products.id = 4;

```

|||
