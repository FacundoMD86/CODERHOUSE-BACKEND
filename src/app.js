import express from 'express';
import ProductManager from "./productos/ProductsManager.js";

const app = express();
app.use(express.urlencoded({extended : true}));

const productManager = new ProductManager('./src/files/Productos.json');
const readProduct = productManager.readProduct();

app.get("/products", async (req, res) => {
    console.log(await readProduct);
});

const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`Express por Local Host ${server.address().port}`)
});
server.on("error", (error) => console.log(`Error del servidor ${error}`));








