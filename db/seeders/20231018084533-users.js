/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Sarah Connor', 
          email: 'cXU9U@example.com',
          password: '123456',
        },
        {
          name: 'Terminator',
          email: '8E1Zs@example.com',
          password: '123',
        },
        {
          name: 'Kile Rise',
          email: 'cXU9U@example.com',
          password: '1234',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
