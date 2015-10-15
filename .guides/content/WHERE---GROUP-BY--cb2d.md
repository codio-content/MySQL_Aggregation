|||info
### It is not possible to use column aliases in `WHERE` clause conditionals

In a `GROUP BY` - `HAVING` statement, you can do this:

```
GROUP BY products.id HAVING avg_stars < 5;
```

Because the `GROUP BY` - `HAVING` focuses on _aggregate functions_ and _aliases_ results.

However, doing the same in a `WHERE` statement will result in the following error:

```
ERROR 1054 (42S22): Unknown column 'avg_stars' in 'where clause'
```

|||

|||info
### The results of _aggregate functions_ and _aliases_ are not stored anywhere in the database
It is important to aknowledge that when working with SQL _aggregate functions_ and _aliases_, the output that you get is the result of SQL performing operations with pre-existing data that matches the specified parameters.

Remember that the `SELECT` statement is merely for display purposes.
|||