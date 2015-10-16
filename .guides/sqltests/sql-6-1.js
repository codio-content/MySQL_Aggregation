var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Select the product with the less stock from the e_store.products table",
    "SELECT MIN(stock) FROM e_store.products"
  ], 
  [
    'Select the product with the less stock from the e_store.products table aliasing the column name as: min_stock',
    "SELECT MIN(stock) AS min_stock FROM e_store.products"
  ],
  [
    'Select the product with the less stock from the e_store.products table where the id is greater than 3. Alias the column name as: min_stock',
    "SELECT MIN(stock) AS min_stock FROM e_store.products WHERE id > 3"
  ]
];


sqltest.init("sql-6-1.sql", "e_store", tasks);
