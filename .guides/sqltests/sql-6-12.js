var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the e_store database",
    "USE e_store"
  ],
  [
    "Join the products and the reviews in a SELECT query",
    "SELECT name, price, stock, AVG(stars) AS avg_stars FROM products JOIN reviews ON products.id = reviews.product_id WHERE stock > 1 GROUP BY products.id HAVING avg_stars >= 3"
  ]
];


sqltest.init("sql-6-12.sql", "e_store", tasks);