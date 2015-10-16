var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the e_store database",
    "USE e_store"
  ], 
  [
    "Get the average rating of product_id 4",
    "SELECT products.id, SUM(stars)/COUNT(stars) AS avg_rating FROM products JOIN reviews ON products.id = reviews.product_id WHERE products.id = 4"
  ]
];


sqltest.init("sql-6-7.sql", "e_store", tasks);
