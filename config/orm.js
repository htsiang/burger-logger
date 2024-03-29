const connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    };
  
    return arr.toString();
  };
  
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
  
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        };
  
        arr.push(key + "=" + value);
      };
    };
  
    return arr.toString();
  };

  var orm = {
    all: function (tableInput, callback) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function (err, result) {
        if (err) throw err;
  
        callback(result);
      });
    },
    create: function (table, cols, vals, cb) {
      console.log('columns');
      console.log(cols);
      console.log('values');
      console.log(vals);
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function (err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function (table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete: function (table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;