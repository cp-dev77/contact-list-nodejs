const userModels = require("./user.models")

const createUserQuery = async (data) => {
    const user = await userModels(data);
    await user.save();
};

const addContactListQuery = async (_id, _idContact) => {
    return await userModels.findByIdAndUpdate({ _id }, { $push: { contactList: _idContact } });
};

const getContactListQuery = async (_id) => {
    const [users] = await userModels.aggregate([
        { $match: { _id } },
        {
            $lookup: {
                from: 'users',
                localField: 'contactList',
                foreignField: '_id',
                as: 'contactList',
                pipeline: [
                    {
                        $project: {
                            password: 0
                        }
                    }
                ]
            }
        },
        {
            $project: {
                password: 0
            }
        }
    ]);
    return users;
};

const deleteContactListQuery = async (_id, _idContact) => {
    return await userModels.findByIdAndUpdate({ _id }, { $pull: { contactList: _idContact } });
}

module.exports = {
    createUserQuery,
    addContactListQuery,
    getContactListQuery,
    deleteContactListQuery
};