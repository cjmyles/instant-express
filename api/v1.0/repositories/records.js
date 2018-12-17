const Repository = require('instant-express-api').FirestoreRepository;
const firebase = require('../../../firebase/index');

class Records extends Repository {
  constructor() {
    super(firebase.db, firebase.db.collection('records'));
    Repository.bind(this, [
      'create',
      'createWithId',
      'createMany',
      'find',
      'findOne',
      'findById',
      'update',
      'updateOrCreate',
      'delete',
      'custom',
    ]);
  }

  async create(attributes) {
    return super.create(attributes);
  }

  async createWithId(id, attributes) {
    return super.createWithId(id, attributes);
  }

  async createMany(arr) {
    return super.createMany(arr);
  }

  async find(query, options) {
    return super.find(query, options);
  }

  async findOne(query, options) {
    return super.findOne(query, options);
  }

  async findById(id, options) {
    return super.findById(id, options);
  }

  async update(id, attributes) {
    return super.update(id, attributes);
  }

  async updateOrCreate(query, attributes) {
    return super.updateOrCreate(query, attributes);
  }

  async delete(id) {
    return super.delete(id);
  }

  async custom(id) {
    try {
      const results = [1, 2, 3, 4];
      return results;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new Records();
