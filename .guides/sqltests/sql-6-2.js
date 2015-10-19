var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Select the most recent product from the e_store.products table. Alias the column name as: newest_product",
    "SELECT MAX(created_at) AS newest_product FROM e_store.products"
  ], 
  [
    'Select the less recent product from the e_store.products table. Alias the column name as: oldest_product',
    "SELECT MIN(created_at) AS oldest_product FROM e_store.products"
  ]
];


sqltest.init("sql-6-2.sql", "e_store", tasks);
