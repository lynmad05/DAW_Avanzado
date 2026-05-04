export default (sequelize, Sequelize) => {
  return sequelize.define("refresh_tokens", {
    token: {
      type: Sequelize.STRING
    },
    expiryDate: {
      type: Sequelize.DATE
    }
  });
};