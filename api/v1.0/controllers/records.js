const Controller = require('instant-express-api').Controller;
const repository = require('../repositories/records');

class Records extends Controller {
  constructor(r) {
    super(r);
    Controller.bind(this, [
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
      const record = await this.repository.custom(id);
      return record;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new Records(repository);
