const database = require("../config/database");

const procesController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await database.query("SELECT * FROM employee");
      res.json({
        rows,
        fields,
      });
    } catch (error) {
      res.json({
        error,
      });
      console.log(error);
    }
  },

  getEmpById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await database.query(
        "SELECT * FROM employee WHERE empId = ?",
        [id]
      );
      if (rows.length != 0) {
        res.json({
          rows,
        });
      } else {
        res.json({
          message: "Not data found",
        });
      }
    } catch (error) {
      res.json({
        error,
      });
    }
  },

  getEmpByName: async () => {},
};

module.exports = procesController;
