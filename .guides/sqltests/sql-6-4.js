var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the e_store database",
    "USE e_store"
  ], 
  [
    "Write a SELECT query that displays the requested table",
    "SELECT products.id, products.name AS product_name, products.price, reviews.stars FROM products JOIN reviews ON products.id = reviews.product_id WHERE products.id = 3 OR products.id = 4"
  ]
];


sqltest.init("sql-6-4.sql", "e_store", tasks);
