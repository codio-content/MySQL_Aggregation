var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the e_store database",
    "USE e_store"
  ], 
  [
    "Display the average star rating of the product_id = 4 using the AVG() SQL function",
    "SELECT products.id, AVG(stars) FROM products JOIN reviews ON products.id = reviews.product_id WHERE products.id = 4"
  ]
];


sqltest.init("sql-6-8.sql", "e_store", tasks);
