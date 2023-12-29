/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Dezin 1',
        email: 'dezin1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Dezin 2',
        email: 'dezin2@gmail.com',
        password_hash: await bcryptjs.hash('543210', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Dezin 3',
        email: 'dezin3@gmail.com',
        password_hash: await bcryptjs.hash('987654', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down: () => {},
};
