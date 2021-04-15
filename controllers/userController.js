const db = require('../db');

class UserController {
  async getUser(req, res) {
    const id = req.query.id;
    const users = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(users.rows);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM users WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }

  async updateUsername(req, res) {
    const {id, username} = req.body;
    const user = await db.query("UPDATE users SET username = $1  WHERE id = $2 RETURNING *", [username, id]);
    res.json(user.rows[0]);
  }

  async updateRole(req, res){
    const {id, role} = req.body;
    const user = await db.query("UPDATE users SET role = $1 WHERE id = $2 RETURNING *", [role, id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
