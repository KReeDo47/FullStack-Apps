//import express
import express from "express";

//import cors. это стандарт, позволяющий предоставлять веб-страницам доступ к объектам сторонних интернет-ресурсов.
import cors from "cors";

//import routes
import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

//PORT
app.listen(5000, () => {console.log("Server running localhost:5000");});
