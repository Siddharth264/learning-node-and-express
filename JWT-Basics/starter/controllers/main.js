


const login = async (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    res.send('Fake Login/Register Route')
}

const dashboard =async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello baby`, secret:`Here is your authorized data, your lucky number is${luckyNumber}`})

}

module.exports = {
    login,
    dashboard
}