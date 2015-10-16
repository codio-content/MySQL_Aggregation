var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the e_store database",
    "USE e_store"
  ], 
  [
    "Select the total stock of all products in the products table.",
    "SELECT SUM(stock) AS total_stock FROM products"
  ],
  [
    "Select the total stars of the product with id = 4",
    "SELECT products.id, SUM(stars) as total_stars FROM products JOIN reviews ON products.id = reviews.product_id WHERE products.id = 4"
  ]
];


sqltest.init("sql-6-5.sql", "e_store", tasks);
