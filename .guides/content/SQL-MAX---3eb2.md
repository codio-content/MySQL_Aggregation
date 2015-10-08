The second `e_store` use case will be: 

### Get the product with the highest price:

This time, the `SELECT` query looks like this, in the `mysql>` command line:

```
mysql> SELECT MAX(price)
    -> FROM e_store.products;
```