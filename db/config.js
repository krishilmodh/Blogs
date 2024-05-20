import {Sequelize} from "sequelize"

const sequelize = new Sequelize("blogs", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Automatically create all tables
sequelize.sync().then(() => {
  console.log('Tables created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

export default sequelize;