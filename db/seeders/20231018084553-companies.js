/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: 'Connor Company',
          phone: '+7123456789',
          user_id: 1,
        },
        {
          name: 'Connor FamilyGroup',
          phone: '+7123456555',
          user_id: 1,
        },
        {
          name: 'Terminator Company',
          phone: '+7123444444',
          user_id: 2,
        },
        {
          name: 'Terminator T1000 Company',
          phone: '+7123456555',
          user_id: 2,
        },
        {
          name: 'Rise & Co',
          phone: '+7126456555',
          user_id: 3,
        },
        {
          name: 'Rise Family',
          phone: '+7123477785',
          user_id: 3,
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
