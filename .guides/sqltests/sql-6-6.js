var sqltest = require("./fw-sqltest-select.js");


var tasks = [
  [
    "Use the e_store database",
    "USE e_store"
  ], 
  [
    "Select the total amount of products in the products table",
    "SELECT COUNT(*) AS total_product_count FROM products"
  ],
  [
    "Select the total stars field count of the product with id = 4",
    "SELECT products.id, COUNT(stars) as stars_fields_count FROM products JOIN reviews ON products.id = reviews.product_id WHERE products.id = 4"
  ]
];


sqltest.init("sql-6-6.sql", "e_store", tasks);
