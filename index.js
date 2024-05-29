const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

// app.post("/test", (req, res) => {
//   var name = req.body.name;
//   var pswd = req.body.pswd;
//   var users = {
//     name,
//     pswd,
//   };
//   user.push(users);
//   res.json({
//     message: `my name is ${name} and id ${pswd}`,
//     user,
//   });
// });

var user = [];

app.post("/signup", (req, res) => {
  var name = req.body.name;
  var pswd = req.body.pswd;
  var city = req.body.city;
  var age = req.body.age;
  var users = {
    name,
    pswd,
    city,
    age,
  };
  user.push(users);
  res.json({
    name,
    pswd,
    city,
    age,
  });
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  const pswd = req.body.pswd;
  for (let i = 0; i < user.length; i++) {
    if (user[i].name === name) {
      if (user[i].pswd === pswd) {
        res.json({
          message: "login success",
          city: user[i].city,
          age: user[i].age,
        });
        return;
      }
    } else {
      res.json("Login failed");
    }
  }
  res.json({ message: "user not found" });
});

app.post("/changepass", (req, res) => {
  const name = req.body.name;
  const pswd = req.body.pswd;
  const newpswd = req.body.newpswd;
  for (let i = 0; i < user.length; i++) {
    if (user[i].name === name) {
      if (user[i].pswd === pswd) {
        user[i].pswd = newpswd;
        res.json("Password changed successfully");
      } else {
        res.json("Password not changed");
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
