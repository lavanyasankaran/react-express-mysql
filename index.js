const express = require("express");
const mysql = require("mysql");
const path = require("path");

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alliswell123*",
  database: "employee",
});
//connect db
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/api/getList", (req, res) => {
  let sql =
    "select e.id,firstname,lastname,age,dateofjoining,salary,depatment,GROUP_CONCAT(c.name) as projects from emp e inner join emphr r on e.id=r.id inner join employeeproject t on t.id =r.id inner join project c on t.projectid=c.id GROUP BY e.id";
  db.query(sql, (err, result) => {
    console.log(result);
    if (err) throw err;
  res.send(result)})
})
/*app.get("/api/getList", getAllEmployees);
function getAllEmployees(req, res) {
  const limit = 3;
  const page = req.query.page;
  const offset = (page - 1) * limit;
  console.log(offset);
  let sql ="select e.id,firstname,lastname,age,dateofjoining,salary,depatment,GROUP_CONCAT(c.name) as projects from emp e inner join emphr r on e.id=r.id inner join employeeproject t on t.id =r.id inner join project c on t.projectid=c.id GROUP BY e.id limit "+limit+" OFFSET "+offset;
    
    
  db.query(sql, (err, result) => {
    if (err) throw err;
    var jsonResult = {
      employees_page_count: result.length,
      page_number: page,
      employee: result,
    };
    var myJsonString = JSON.parse(JSON.stringify(jsonResult));
    res.statusMessage = "Products for page " + page;
    res.statusCode = 200;
    res.json(myJsonString);
    res.send(myJsonString);
    res.end();
  });
}*/

// An api endpoint that returns a short list of items
/*app.get("/api/getList", (req, res) => {
  let sql =
    "select e.id,firstname,lastname,age,dateofjoining,salary,depatment from emp e inner join emphr r on e.id=r.id ";
  db.query(sql, (err, result) => {
    console.log(result);
    if (err) throw err;
    let finalResult = [];

    
    result.forEach((it) => {
      console.log("id=", it.id);
      let q = `select p.name from  employeeproject e inner join project p on e.projectid=p.id where e.id = '${it.id}'`;
      console.log("query=", q);
      db.query(q, async (err, result) => {
        if (err) throw err;
        it.projects = result;
        await finalResult.push(it);
        console.log("finalresult1=", finalResult);
      });
    });
    res.send(result);
    console.log("finalresult12=", finalResult);
  });
});*/
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
