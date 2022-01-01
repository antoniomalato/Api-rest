const connection = require('../connection');

module.exports = async (collection, id) => {

    const { _id, ...entityWithoutId } = entity;

    return (await connection()).collection(collection).updateOne(
        {
            _id: id,
        },
        {
            $set: entityWithoutId,
        },
    );
};
