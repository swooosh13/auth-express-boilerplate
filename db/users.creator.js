const fs = require("fs");
const bcrypt = require("bcryptjs");

let data = "";
const userPassword = "password1234";

for (let i =0; i < 45; i++) {
  let hashPassword = bcrypt.hashSync(userPassword, 7);
  let email = `user${i}@mail.ru`;
  let username = "user:" + email;
  data += `INSERT INTO users (email, password, username) VALUES ('${email}', '${hashPassword}', '${username}');\n`;
}

fs.writeFileSync("dm.dml.sql", data, (error) => {
  console.log(error);
})