const router = require("express").Router();
// const authorization = require("../middleware/authorization");
const pool = require("../db");



router.get("/", async (req, res) => {
  try {

    // res.json(req.user.id)

    const products = await pool.query("SELECT * FROM products")

    return res.json(products.rows)

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});




module.exports = router;