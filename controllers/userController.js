const db = require('../db');

class UserController {
  async getUser(req, res) {
    const id = req.query.id;
    const users = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(users.rows);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM users where id = $1", [id]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const {id, username} = req.body;
    const user = await db.query("UPDATE users set username = $1  where id = $2 RETURNING *", [username, id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
