import {openDb} from "../configDB.js"

export async function createTable() {
  openDb().then(db => {
    db.exec("CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)")
  })
}

export async function createUser(user) {
  openDb().then(db => {
    db.run("INSERT INTO User (name, age) values (?,?)", [user.name, user.age])
  })
}

export async function readUser(id) {
  return openDb()
    .then(db => {
      return db.get("SELECT * FROM User WHERE id=?", [id])
        .then(res => res)
    })
}

export async function updateUser(user) {
  openDb().then(db => {
    db.run("UPDATE User SET name=?, age=? WHERE id=? ", [user.name, user.age, user.id])
  })
}

export async function deleteUser(id) {
  return openDb().then(db => {
    db.get("DELETE FROM User WHERE id=?", [id])
      .then(res => res)
  })
}

export async function listUsers() {
  return openDb()
    .then(db => {
      return db.all("SELECT * FROM User")
        .then(res => res)
    })
}
