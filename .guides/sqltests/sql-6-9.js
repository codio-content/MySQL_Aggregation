var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the e_store database",
    "USE e_store"
  ], 
  [
    "Join the products and the reviews tables",
    "SELECT products.id, name, AVG(stars) AS avg_stars FROM products JOIN reviews ON products.id = reviews.product_id GROUP BY products.id HAVING avg_stars <= 3"
  ]
];


sqltest.init("sql-6-9.sql", "e_store", tasks);
