
import users from '../data.json' assert { type: 'json' }
import fs from 'fs'

export const home = (req, res) => {
    console.log("Home get")
    res.send(`Get Request`)
}

export const getUsers = (req, res) => {
    res.send(users)
    // console.log("Home get")
}

export const getUser = async (req, res) => {
    const id = req.params.id
    const user = users[id-1];
    // const user = users.find(user => user.id == id)
    res.send(user);
}

export const createUser = async (req, res) => {
    try {
        const body = req.body
        users.push({ id: users.length + 1, ...body })
        fs.writeFileSync('data1.json', JSON.stringify(users))
        res.send("User added successfully...")
    } catch (error) {
        console.error(error)
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const body = req.body;
        users.map(user => {
            if (user.id == id) {
                user.first_name = body.first_name
                user.last_name = body.last_name
                user.email = body.email
            }
        })
        fs.writeFileSync('data1.json', JSON.stringify(users))
        res.send("User updated successfully...")
    } catch (error) {
        console.error(error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = users.filter(user => user.id != id)
        // users.splice(id-1, 1);
        fs.writeFileSync('data1.json', JSON.stringify(user))
        res.send("User deleted successfully...")
    } catch (error) {
        console.error(error)
    }
}






