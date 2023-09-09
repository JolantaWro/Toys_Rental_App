const Pool = require("pg").Pool;
// const {Pool} = require("pg")


// const pool = new Pool({
// 	host: "localhost",
// 	user: "postgres",
// 	password: "",
// 	port: 5432,
// 	database: "dbtoys",
// });

const pool = new Pool({
	connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })

pool.connect((err) => {
	if (err) throw err
	console.log("connect successfully")
})

module.exports = pool;
