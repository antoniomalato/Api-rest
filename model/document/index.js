const _find = require('./find');
const _create = require('./create');
const _update = require('./update');
const _remove = require('./remove');
const _findById = require('./findById');

module.exports = (collection) => {
    return {
        find: _find(collection),
        remove: _remove(collection, id),
        create: _create(collection, entity),
        update: _update(collection, entity),
        findById: _findById(collection, id),
    };
};
