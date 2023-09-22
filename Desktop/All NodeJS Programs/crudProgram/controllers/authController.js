const connection = require("../config/database");
const bcrypt = require("bcrypt");

const secretkey = "welcome";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username && !password)
    res.json({ message: "Username and password is required" });

  const [rows] = await connection.query(
    "SELECT * FROM user where username = ? ",
    [username]
  );

  if (rows.length == 0) res.json({ message: "Authentication failed!" });

  const compareHashed = await bcrypt.compare(rows[0].password, password);

  if (compareHashed) res.json({ message: "Password is wrong" });

  res.json({ message: "Login Successfully" });
};

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username && !password)
      res.json({ message: "Username and password is required" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const resp = await connection.query(
      "insert into user(username, password) values (?, ?)",
      [username, hashedPassword]
    );

    res.json({ message: "Registered Successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, register };
