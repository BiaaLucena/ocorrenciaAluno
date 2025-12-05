import { Router } from "express";
import controllerAluno from "./controllers/alunoController.js";

const router = Router();
router.post("/alunos", controllerAluno.Inserir)
router.get("/alunos", controllerAluno.Listar)
router.put("/alunos/:matricula", controllerAluno.Editar)
router.delete("/alunos/:matricula", controllerAluno.Excluir)


export default router;