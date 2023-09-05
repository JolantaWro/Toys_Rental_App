const Pool = require("pg").Pool;

const pool = new Pool({
	host: "localhost",
	user: "postgres",
	password: "1post1gres1",
	port: 5432,
	database: "dbtoys",
});

module.exports = pool;
