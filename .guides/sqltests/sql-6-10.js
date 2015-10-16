var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Select the minimum product stock and maximum product stock of the e_store.products table",
    "SELECT MIN(stock) AS min_stock, MAX(stock) AS max_stock FROM products"
  ]
];


sqltest.init("sql-6-10.sql", "e_store", tasks);
