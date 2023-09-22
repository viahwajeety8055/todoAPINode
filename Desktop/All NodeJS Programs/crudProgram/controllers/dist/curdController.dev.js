"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var bcrypt = require("bcrypt");

var connection = require("../config/database");

var readValue = function readValue(req, res) {
  var _ref, _ref2, rows;

  return regeneratorRuntime.async(function readValue$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connection.query("SELECT * FROM product"));

        case 2:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          rows = _ref2[0];
          if (rows.length < 0) res.json({
            message: "No data found"
          });
          res.json({
            rows: rows
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var createValue = function createValue(req, res) {
  var _req$body, name, price, inserted;

  return regeneratorRuntime.async(function createValue$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, price = _req$body.price;
          if (!name && !price) res.json({
            message: "All input field is required"
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(connection.query("insert into product(name, price) values(?, ?)", [name, price]));

        case 5:
          inserted = _context2.sent;
          res.json({
            message: "Data inserted into table successfully"
          });
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.json({
            error: _context2.t0
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var updateValue = function updateValue(req, res) {
  var price, name, _ref3, _ref4, rows, result;

  return regeneratorRuntime.async(function updateValue$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          price = req.body.price;
          name = req.params.name;
          _context3.next = 5;
          return regeneratorRuntime.awrap(connection.query("SELECT * FROM product WHERE name = ?", [name]));

        case 5:
          _ref3 = _context3.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          rows = _ref4[0];

          if (!(rows.length <= 0)) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.json({
            message: "No data found"
          }));

        case 10:
          _context3.next = 12;
          return regeneratorRuntime.awrap(connection.query("UPDATE product SET price = ? WHERE name = ?", [price, name]));

        case 12:
          result = _context3.sent;
          res.json({
            message: "Data updated successfully"
          });
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          res.json(_context3.t0);

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

var deleteValue = function deleteValue(req, res) {
  var name, _ref5, _ref6, rows;

  return regeneratorRuntime.async(function deleteValue$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          name = req.params.name;
          _context4.next = 4;
          return regeneratorRuntime.awrap(connection.query("SELECT * FROM product WHERE name = ? ", [name]));

        case 4:
          _ref5 = _context4.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          rows = _ref6[0];
          if (rows.length == 0) res.json({
            message: "No data found"
          }); // const result = await

          _context4.next = 12;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

module.exports = {
  readValue: readValue,
  createValue: createValue,
  updateValue: updateValue,
  deleteValue: deleteValue
};