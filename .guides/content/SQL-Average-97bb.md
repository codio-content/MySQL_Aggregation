As you have experienced, it is possible to perform simple arithmetics with SQL aggregate functions. 

Fortunately for us, SQL has an `AVG()` that calculates the average of number values for us. 

Let's get the average stars for the _Tablet_ product this time (the _Tablet_ product has `product_id` `1`), _alias_ the `stars` column as `stars_avg` this time.

In your `mysql>` command line: 

```
mysql> SELECT products.id, name, 
    -> AVG(stars) AS stars_avg
    -> FROM products 
    -> JOIN reviews 
    -> ON products.id = reviews.product_id 
    -> WHERE product_id = 1;
```

And you should see this: 

```
+----+--------+-----------+
| id | name   | stars_avg |
+----+--------+-----------+
|  1 | Tablet |    4.0000 |
+----+--------+-----------+
1 row in set (0.00 sec)
```

Where `4.000` is the result of dividing `8` (the sum of stars for the _Tablet_ product) by `2` (the total count of _Tablet_ products with stars). 

--- 
All right! Get ready for the challenges. 