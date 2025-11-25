import express from "express";
import cors from "cors";
import routes from "./routes.js";
const app = express();


app.use(express.json())
app.use(cors());
app.use(routes);


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor está funcionando ✅");
});
 
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})

