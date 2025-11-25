import con from "../database/connection.js";

async function Listar() {
  const sql = "SELECT * FROM aluno";
  const [alunos] = await con.connection.execute(sql);
  return alunos;
}

async function Inserir(matricula, nome, sobrenome, turma, login, email, senha) {
  const sql = `INSERT INTO aluno (matricula, nome, sobrenome, turma, login, email, senha)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const [result] = await con.connection.query(sql, [matricula, nome, sobrenome, turma, login, email, senha]);
  return result;
}

async function Editar(matricula, nome, sobrenome, turma, login, email, senha) {
  const sql = `UPDATE aluno
               SET nome = ?, sobrenome = ?, turma = ?, login = ?, email = ?, senha = ?
               WHERE matricula = ?`;
  const [result] = await con.connection.query(sql, [nome, sobrenome, turma, login, email, senha, matricula]);
  return result;
}

async function Excluir(matricula) {
  const sql = "DELETE FROM aluno WHERE matricula = ?";
  const [result] = await con.connection.query(sql, [matricula]);
  return { mensagem: "Aluno excluído com sucesso" };
}

export default { Listar, Inserir, Editar, Excluir };
