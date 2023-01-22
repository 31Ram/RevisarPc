const express = require("express");
const app = express();

const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cyf_ecommerce',
    password: 'Cali',
    port: 5432
});

// app.get("/customers", function(req, res) {
//     pool.query('SELECT * FROM customers', (error, result) => {
//         res.json(result.rows);
//     });
// });

// app.get("/customers", function(req, res) {
//     pool.query('SELECT * FROM customers', (error, result) => {
//         res.json(result.rows);
//     });
// });

// app.get("/suppliers", function(req, res) {
//     pool.query('SELECT * FROM suppliers', (error, result) => {
//         res.json(result.rows);
//     });
// });

// app.get("/products", function(req, res) {
//     pool.query(`select products.product_name, products.unit_price, order_items.quantity, orders.order_reference from orders join order_items on orders.id = order_items.order_id  join products on order_items.product_id = products.id where orders.order_reference = 'ORD006'`, (error, result) => {
//         res.json(result.rows);
//     });
// });

const listAllProducts =
    "select products.product_name , suppliers.supplier_name " +
    "from products join suppliers on products.supplier_id = suppliers.id"

const listProductsByName =
    'select products.product_name, suppliers.supplier_name ' +
    ' from products join suppliers on products.supplier_id = suppliers.id ' +
    ' where products.product_name like $1';

const customersById = 'select * from customers where id = $1';
const createNewProduct = 'INSERT INTO products (product_name, unit_price, supplier_id) VALUES ($1,$2,$3)';

app.get('/customers', (req, res) => {
    pool.query('select * from customers', (error, result) => {
        res.json(result.rows)
    })
})

app.get("/products", function (req, res) {
    let productNameLike = req.query.productName

    if (!productNameLike) {
        // Client is not sending any name
        pool.query(listAllProducts, (error, result) => {
            if (error) {
                console.error(e)
                res.send('Error al buscar productos')
            } else {
                res.json(result.rows);
            }
        });
    } else {
        pool.query(listProductsByName, ['%' + productNameLike + '%'])
            .then(result => {res.json(result.rows)})
            .catch(e => {
                console.error(e)
                res.send('Error al buscar productos pro nombre')
            })
    }
});

app.get('/customers/:customersId', (req, res) => {
    let customersId = req.params.customersId
    if (!customersId) {
        pool.query('select * from customers', (error, result) => {
        res.json(result.rows)})
    } else {
        pool.query(customersById, [customersId], (error, result) => {
        res.json(result.rows)})
    }
})

app.post('/products', (req, res) => {
    let newProductName = req.body.product_name
    let newProductUnitPrice = req.body.unit_price
    let newProductSupplierId = req.body.supplier_id
    
    if (newProductUnitPrice !== Number){
        res.send('el precio debe ser numerico')
    } else {
        pool.query(createNewProduct, [newProductName,newProductUnitPrice,newProductSupplierId], (error, result) => {
            if (error) {
                console.log(error);
            } else {
                res.json('producto creado')
            }
        })
    }
})

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});