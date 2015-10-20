|||info
### Output reference challenge

This challenge has an _output reference_, meaning that the SQL queries you write in the `*.sql` file must output the same result if you `source` it. 

For these kind of challenges, there is a terminal tab enabled in the left pane so you can: 

1. Write down the tasks in the file
2. `source` the file in the `mysql>` command line by executing `source sql-6-*.sql`
3. Compare the output of your input file against the reference output
4. If the result matches, _Check it!_ afterwards

|||

{Check It!|assessment}(test-1426895341)


|||guidance
### In the `sql-6-1.sql` file:

```
SELECT MIN(stock) FROM e_store.products;

SELECT MIN(stock) AS min_stock FROM e_store.products; 

SELECT MIN(stock) AS min_stock FROM e_store.products WHERE id > 3;
```

|||