import {Sequelize} from "sequelize" // Importing Sequelize for database operations

// Creating a new Sequelize instance with database details
const sequelize = new Sequelize("blogs", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

try {
  // Authenticating the Sequelize instance
  await sequelize.authenticate();
  console.log("Connection has been established successfully."); // Log success message
} catch (error) {
  console.error("Unable to connect to the database:", error); // Log error message
}

// Automatically create all tables
sequelize.sync().then(() => {
  console.log('Tables created successfully!'); // Log success message
}).catch((error) => {
  console.error('Unable to create table : ', error); // Log error message
});

export default sequelize; // Exporting the Sequelize instance