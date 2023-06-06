import express from "express";
import { getItem, getItems, createItem, deleteItem, updateItem } from "./controllers/images.js";
import { dbConnect } from "./db/mongo.js";
import { PORT } from "./config/index.js";
import { createfileItem } from "./controllers/file.js";
import { uploadMiddleware } from "./middleware/file.js";

const app = express();
app.use(express.json());
const port = PORT;

// Get all images
app.get("/api/images", getItems); 

//Get image
app.get("/api/images/:id", getItem);

//Create new image
app.post("/api/images", createItem);

//Delete image
app.delete("/api/images/:id", deleteItem);

//Update image
app.put("/api/images/:id", updateItem);

//Upload file
app.post("/api/images/file", uploadMiddleware.single("myfile"), createfileItem)

app.listen(port, () => {
console.log(`Server on ${port}`);
});

dbConnect();

