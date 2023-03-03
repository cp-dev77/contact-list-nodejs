const { Types } = require('mongoose');
const { createUserQuery, addContactListQuery, getContactListQuery, deleteContactListQuery } = require("../models/user/user.query");

const createUserController = async (req, res) => {
    try {
        await createUserQuery(req.body);
        res.json('User created');
    } catch (error) {
        console.log(error);
        res.json('Internal server error');
    }
};

const addContactListUserController = async (req, res) => {
    try {
        const { _id, _idContact } = req.body;
        await addContactListQuery(Types.ObjectId(_id), Types.ObjectId(_idContact));
        res.json('user added to contact list');
    } catch (error) {
        console.log(error);
        res.json('Internal server error');
    }
};

const getContactListUserController = async (req, res) => {
    try {
        const { _id } = req.body;
        const users = await getContactListQuery(Types.ObjectId(_id));
        res.json(users);
    } catch (error) {
        console.log(error);
        res.json('Internal server error');
    }
};

const deleteContactListUserController = async (req, res) => {
    try {
        const { _id, _idContact } = req.body;
        await deleteContactListQuery(Types.ObjectId(_id), Types.ObjectId(_idContact));
        res.json('user removed from contact list');
    } catch (error) {
        console.log(error);
        res.json('Internal server error');
    }
}

module.exports = {
    createUserController,
    addContactListUserController,
    getContactListUserController,
    deleteContactListUserController
};