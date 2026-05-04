require("dotenv").config();
const app = require("./src/app");
const { sequelize } = require("./src/models");

require("./src/models");

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("API corriendo en puerto " + process.env.PORT);
  });
});