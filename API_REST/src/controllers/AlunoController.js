import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll(// {
      //   attributes: ['id', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      //   order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      //   inlcude: {
      //     model: Foto,
      //     attributes: ['url', 'filename'],
      //   },
      );
      res.json(alunos);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      // Validando de o ID foi enviado na requisição
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, // {
        // attributes: ['id', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        // order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        // inlcude: {
        //   model: Foto,
        //   attributes: ['url', 'filename'],
        // },
      );

      // Validando se o aluno com o ID em questão existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      // Validando de o ID foi enviado na requisição
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      // Validando se o aluno com o ID em questão existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      // Validando de o ID foi enviado na requisição
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      // Validando se o aluno com o ID em questão existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      // Apagando o aluno com o ID em questão caso exista
      await aluno.destroy();
      return res.json('Aluno apagado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
