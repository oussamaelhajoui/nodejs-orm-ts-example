import Sequelize from "sequelize";
import argv from '../help';
import mysql from 'mysql';


const dbUser = argv.user;
const dbPassword = argv.password;
const dbName = "myExampleDb";

export async function createDb(){
    const con = mysql.createConnection({
        host: "localhost",
        user: dbUser,
        password: dbPassword
    });

    con.connect(function(err: any) {
        if (err) {
            console.log("Could not connect to the database, please check the manual to enter your own credentials of your db");
            process.exit()
        }
        console.log("Data layer connected!");
        con.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`, function (err: any, result: any) {
            if (err) throw err;
            console.log("Database created");
            con.destroy();
        });
    });
}

// @ts-ignore
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.sync();

export default sequelize;
