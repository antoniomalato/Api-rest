const { ObjectId } = require('bson');
const connection = require('../connection');

module.exports = async (colletion, id) => {
    return (await connection()).colletion(colletion).findOne({
        _id: ObjectId(id),
    })
};
