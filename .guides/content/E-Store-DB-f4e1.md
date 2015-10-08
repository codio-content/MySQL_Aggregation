E-commerce is one of the most popular business-models on the internet. 

Regardless of the products that the e-commerce platform may sell, its product catalog may have the following data structure (or similar in it's simplest form): 

Tables from the `e_store` database:

`SHOW COLUMNS FROM e_store.products`:
```
+------------+-----------------+------+-----+---------+----------------+
| Field      | Type            | Null | Key | Default | Extra          |
+------------+-----------------+------+-----+---------+----------------+
| id         | int(3) unsigned | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255)    | NO   |     | NULL    |                |
| price      | float(8,2)      | NO   |     | 0.00    |                |
| stock      | int(3) unsigned | NO   |     | 0       |                |
| created_at | datetime        | NO   |     | NULL    |                |
+------------+-----------------+------+-----+---------+----------------+
```

`SHOW COLUMNS FROM e_store.users`:
```
+----------+-----------------+------+-----+---------+----------------+
| Field    | Type            | Null | Key | Default | Extra          |
+----------+-----------------+------+-----+---------+----------------+
| id       | int(3) unsigned | NO   | PRI | NULL    | auto_increment |
| username | varchar(255)    | NO   |     | NULL    |                |
+----------+-----------------+------+-----+---------+----------------+
```

`SHOW COLUMNS FROM  e_store.reviews`:
```
+------------+---------------------+------+-----+---------+----------------+
| Field      | Type                | Null | Key | Default | Extra          |
+------------+---------------------+------+-----+---------+----------------+
| id         | int(3) unsigned     | NO   | PRI | NULL    | auto_increment |
| product_id | int(3) unsigned     | NO   | MUL | NULL    |                |
| stars      | tinyint(1) unsigned | NO   |     | 1       |                |
| user_id    | int(3) unsigned     | NO   | MUL | NULL    |                |
+------------+---------------------+------+-----+---------+----------------+
```