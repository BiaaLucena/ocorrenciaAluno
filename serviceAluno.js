import repoAluno from "../repositories/repositoryAluno.js";

async function Listar() {
  return await repoAluno.Listar();
}

async function Inserir(matricula, nome, sobrenome, turma, login, email, senha) {
  if (!matricula || !nome || !sobrenome || !turma || !login || !email || !senha) {
    throw new Error("Campos obrigatórios faltando");
  }

  return await repoAluno.Inserir(
    matricula,
    nome.toUpperCase(),
    sobrenome.toUpperCase(),
    turma,
    login,
    email,
    senha
  );
}

async function Editar(matricula, nome, sobrenome, turma, login, email, senha) {
  if (!matricula) throw new Error("Matrícula não informada");

  return await repoAluno.Editar(
    matricula,
    nome?.toUpperCase(),
    sobrenome?.toUpperCase(),
    turma,
    login,
    email,
    senha
  );
}

async function Excluir(matricula) {
  if (!matricula) throw new Error("Matrícula não informada");
  return await repoAluno.Excluir(matricula);
}

export default { Listar, Inserir, Editar, Excluir };
