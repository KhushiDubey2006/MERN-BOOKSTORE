import express from "express";
import { createBook, deleteBook, getAllBooks, getBookById, UpdateBook } from "../controllers/bookController.js";



const router = express.Router()

router.get("/",getAllBooks)
router.get("/:id",getBookById)
router.post("/",createBook)
router.put("/:id",UpdateBook)
router.delete("/:id",deleteBook)

export default router