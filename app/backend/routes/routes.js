//import express
import express from "express";

//импортировать функции из контроллера
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

//init express router
const router = express.Router();

// получить весь продукт
router.get("/products", showProducts);

// получить весь продукт по айди
router.get("/products/:id", showProductById);

// Создать новый продукт
router.post("/products", createProduct);

// Обновить продукт
router.put("/products/:id", updateProduct);

// Удалить продукт
router.delete("/products/:id", deleteProduct);

//eэкспортировать маршрутизатор по умолчанию
export default router;
