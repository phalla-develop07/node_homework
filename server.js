import express from 'express'
import db from './db.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

const users = []
// list​​​​​​​​ //
// app.get('/users', (req, res) => {
//   res.send(users)
// })
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.send(result);
  });
});

// create //
// app.post('/users', (req, res) => {
//   const user = {
//     id: Date.now(),
//     name: req.body.name
//   }
//   users.push(user)
//   res.status(201).send(user)
// })
app.post("/users", (req, res) => {
  const { name } = req.body;

  db.query(
    "INSERT INTO users (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json({ message: 'User is created successfully!' });
    }
  );
});

// update //
// app.put('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = users.find(u => u.id === id)
//   if (!user) {
//     return res.status(500).json({ message: 'User not found' });
//   }
//   user.name = req.body.name
//   res.send(user);
// })
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const sql = "UPDATE users SET name = ? WHERE id = ?";

  db.query(sql, [name, id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.status(201).json({ message: 'User is updated successfully!' });
  });
});


// delete //
// app.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = users.findIndex(u => u.id === id);
//   console.log(index);
//   if (index === -1) {
//     return res.status(500).json({ message: 'User not found' });
//   }
//   users.splice(index, 1);
//   res.send({ message: 'User deleted successfully' });
// })
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.status(201).json({ message: 'User is deleted successfully!' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
