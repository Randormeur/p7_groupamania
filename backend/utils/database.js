const { Sequelize } = require('sequelize');

// Connection to MariaDB
const sequelize = new Sequelize('groupamania', 'root', 'Dzq89HYggjkpl52f8D9Q1POAZTF', {
    host: 'localhost',
    dialect: 'mariadb'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;