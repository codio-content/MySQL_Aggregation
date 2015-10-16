var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Select the total stock and the total products from the e_store.products table",
    "SELECT SUM(stock) AS total_stock, COUNT(*) AS total_products FROM e_store.products"
  ]
];


sqltest.init("sql-6-11.sql", "e_store", tasks);