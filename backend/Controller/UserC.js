const User = require("../Model/UserM");

const login = async (req, res) => {
    const { email, password } = req.body

    console.log(req.body);

    try {
        const check = await User.findOne({ email: email, password: password })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("Not Exist")
        }
    } catch (e) {
        res.json("Not Exist")
    }
}

const createaccount = async (req, res) => {
    const { email, password, username, number, Userid } = req.body

    if (!email || !password || !username || !number) {
        return res.json("All fields are required");
    }

    const userData = await User.find({});
    console.log(userData.length);

    const data = {
        email: email,
        password: password,
        username: username,
        number: number,
        Userid: userData.length > 0 ? userData[userData.length - 1].Userid + 1 : 1
    }

    try {

        const check = await User.findOne({ email: email });

        if (check) {
            return res.json("exist")
        }
        else {
            await User.create(data)
            return res.json("Not Exist")
        }
    } catch (e) {
        console.error("Error:", e);
        return res.json("not exist");
    }
}

module.exports = { login, createaccount };