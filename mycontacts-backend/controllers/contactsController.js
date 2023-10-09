
const getAllContacts = (req, res) => {
    res.status(200).json({msg:`Get All contacts`})
}

const createContact =  (req, res) => {
    console.log(req.body)
    const { name, email, phone } = req.body

    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are required")
    }

    res.status(201).json({msg:`Create a Contact`})
}

const getContact = (req, res) => {
    res.status(200).json({msg:`Get a Contact for ${req.params.id}`})
}

const updateContact = (req, res) => {
    res.status(200).json({msg:`Update Contact for ${req.params.id}`})
}

const deleteContact = (req, res) => { 
    res.status(200).json({msg:`Delete Contact for ${req.params.id}`})
}

module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact, updateContact, deleteContact}