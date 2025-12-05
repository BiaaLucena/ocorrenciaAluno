import serviceAluno from "../services/serviceAluno.js";

async function Listar(req, res) {
  try {
    const alunos = await serviceAluno.Listar();
    return res.status(200).json(alunos);
  } catch (err) {
    console.error("Erro ao listar alunos:", err);
    return res.status(500).json({ erro: "Erro ao listar alunos" });
  }
}

async function Inserir(req, res) {
  try {
    const { matricula, nome, sobrenome, turma, login, email, senha } = req.body;

    await serviceAluno.Inserir(
      matricula,
      nome,
      sobrenome,
      turma,
      login,
      email,
      senha
    );

    return res.status(201).json({ mensagem: "Aluno inserido com sucesso!" });
  } catch (err) {
    console.error("Erro ao inserir aluno:", err);
    return res.status(500).json({ erro: err.message || "Erro ao inserir aluno" });
  }
}

async function Editar(req, res) {
  try {
    const { matricula } = req.params;
    const { nome, sobrenome, turma, login, email, senha } = req.body;

    const result = await serviceAluno.Editar(
      matricula,
      nome,
      sobrenome,
      turma,
      login,
      email,
      senha
    );

    return res.status(200).json({ mensagem: "Aluno atualizado!", result });
  } catch (err) {
    console.error("Erro ao editar aluno:", err);
    return res.status(500).json({ erro: "Erro ao editar aluno" });
  }
}

async function Excluir(req, res) {
  try {
    const { matricula } = req.params;
    const result = await serviceAluno.Excluir(matricula);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Erro ao excluir aluno:", err);
    return res.status(500).json({ erro: "Erro ao excluir aluno" });
  }
}

export default { Listar, Inserir, Editar, Excluir };
