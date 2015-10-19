|||info
### Output reference challenge

This challenge has an _output reference_, meaning that the SQL queries you write in the `*.sql` file must output the same result if you `source` it. 

For these kind of challenges, there is a terminal tab enabled in the left pane so you can: 

1. Write down the tasks in the file
2. `source` the file in the `mysql>` command line by executing `source sql-6-*.sql`
3. Compare the output of your input file against the reference output
4. If the result matches, _Check it!_ afterwards

|||

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
