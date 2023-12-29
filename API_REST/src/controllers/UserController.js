import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });// attributes seta quais atributos serão mostrados
      console.log('USER ID: ', req.userId);
      console.log('USER EMAIL: ', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // req.params.id = Parametro que vem pelo endereço da rota na requisição

      const { id, nome, email } = user;
      return res.json({ id, nome, email }); // Retornando na API somente os atributos informados
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // Buscando o usuario no database pelo ID enviado na requisição
      const user = await User.findByPk(req.userId);

      // Validando se o usuário com ID recebido existe
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      // Atualizando os dados do usuario com o ID informado e atribuindo o objeto na constante dadosRecebidos
      const dadosRecebidos = await user.update(req.body);

      const { id, nome, email } = dadosRecebidos;

      // Retornando os dados do objeto recebido
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // Buscando o usuario no database pelo ID enviado na requisição
      const user = await User.findByPk(req.userId); // req.params.id = Parametro que vem pelo endereço da rota na requisição

      // Validando se o usuário com ID recebido existe
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      // Atualizando os dados do usuario com o ID informado e atribuindo o objeto na constante dadosRecebidos
      await user.destroy(req.body);

      // Retornando os dados do objeto recebido
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
