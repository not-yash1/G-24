
export const home = (req, res) => {
    res.send("Home Page")
}

export const about = (req, res) => {
    res.send("About Page")
}

export const createUser = async (req, res) => {
    try {
        const users = [];
        const body = req.body
        users.push({ id: users.length + 1, ...body })
        console.log(users);
        res.send("User added successfully...")
    } catch (error) {
        console.error(error)
    }
}

export const updateUser = async (req, res) => {
    try {
        const users = [{
            id: 1,
            first_name: "Test",
            last_name: "User",
            ip_address: "127.0.0.1",
            email: "testuser@us.com",
            gender: "Male"
        }]
        const id = req.params.id
        const body = req.body
        users.map(user => {
            if (user.id == id) {
                user.first_name = body.first_name
                user.last_name = body.last_name
                user.email = body.email
            }
        })
        console.log(users)
        res.send("User updated successfully...")
    } catch (error) {
        console.error(error)
    }
}
