const bcrypt = require("bcrypt");
const connection = require("../config/database");

const readValue = async (req, res) => {
  const [rows] = await connection.query("SELECT * FROM product");

  if (rows.length < 0) res.json({ message: "No data found" });

  res.json({ rows });
};

const createValue = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name && !price) res.json({ message: "All input field is required" });

    const inserted = await connection.query(
      "insert into product(name, price) values(?, ?)",
      [name, price]
    );

    res.json({ message: "Data inserted into table successfully" });
  } catch (error) {
    res.json({ error });
  }
  //   res.json({ message: "adsfsad" });
};

const updateValue = async (req, res) => {
  try {
    const { price } = req.body;
    const name = req.params.name;

    const [rows] = await connection.query(
      `SELECT * FROM product WHERE name = ?`,
      [name]
    );

    if (rows.length <= 0) {
      return res.json({ message: "No data found" });
    }

    // Corrected the "update" statement
    const result = await connection.query(
      "UPDATE product SET price = ? WHERE name = ?",
      [price, name]
    );

    res.json({ message: "Data updated successfully" });
  } catch (error) {
    res.json(error);
  }
};

const deleteValue = async (req, res) => {
  try {
    const name = req.params.name;

    const [rows] = await connection.query(
      "SELECT * FROM product WHERE name = ? ",
      [name]
    );

    if (rows.length == 0) res.json({ message: "No data found" });

    // const result = await
  } catch (error) {}
};

module.exports = { readValue, createValue, updateValue, deleteValue };
