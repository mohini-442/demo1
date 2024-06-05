const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

var user = [];

app.post("/signup", (req, res) => {
  var name = req.body.name;
  var pswd = req.body.pswd;
  var city = req.body.city;
  var age = req.body.age;
  var pin = red.body.pin;
  var mail = red.body.mail;

  var users = {
    name,
    pswd,
    city,
    age,
    mail,
    pin,
    purchased: [],
  };
  user.push(users);
  res.json({
    name,
    pswd,
    city,
    age,
    mail,
    pin,
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

var seller = [];

app.post("/sellersignup", (req, res) => {
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
  seller.push(users);
  res.json({
    name,
    pswd,
    city,
    age,
  });
});

app.post("/sellerlogin", (req, res) => {
  const name = req.body.name;
  const pswd = req.body.pswd;
  for (let i = 0; i < seller.length; i++) {
    if (seller[i].name === name) {
      if (seller[i].pswd === pswd) {
        res.json({
          message: "login success",
          city: seller[i].city,
          age: seller[i].age,
        });
        return;
      }
    } else {
      res.json("Login failed");
    }
  }
  res.json({ message: "user not found" });
});

app.post("/addproduct", (req, res) => {
  var name = req.body.name;
  var price = req.body.price;
  var img = req.body.img;
  var description = req.body.description;
  var id = req.body.id;
  var users = {
    name,
    price,
    description,
    id,
    img,
  };
  seller.push(users);
  res.json({
    name,
    price,
    description,
    id,
    img,
  });
});

app.post("/purchased", (req, res) => {
  const name = req.body.name;
  const pswd = req.body.pswd;
  const itemid = req.body.itemid;
  for (let i = 0; i < products.length; i++) {
    if (user[i].name === name) {
      if (user[i].pswd === pswd)
        for (let g = 0; g < products.length; g++) {
          if (products[g].name === itemid) {
            user[g].purchased.push(products[g]);
            res.json(user[g]);
          }
        }
    } else {
      res.json("user not found");
    }
  }
  res.json({ massage: "seller not found" });
});

app.get("/getproduct", (req, res) => {
  res.json(seller);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
