const Actions = require('instant-express-api').Actions;
const controller = require('../controllers/records');

class Records extends Actions {
  constructor(c) {
    super(c);
    Actions.bind(this, [
      'create',
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

  async create(req, res, next) {
    super.create(req, res, next);
  }

  async createMany(req, res, next) {
    super.createMany(req, res, next);
  }

  async find(req, res, next) {
    super.find(req, res, next);
  }

  async findOne(req, res, next) {
    super.findOne(req, res, next);
  }

  async findById(req, res, next) {
    super.findById(req, res, next);
  }

  async update(req, res, next) {
    super.update(req, res, next);
  }

  async updateOrCreate(req, res, next) {
    super.updateOrCreate(req, res, next);
  }

  async delete(req, res, next) {
    super.delete(req, res, next);
  }

  async custom(req, res, next) {
    try {
      const record = await this.controller.custom(req.params.id);
      Actions.send(res).ok(record);
    } catch (error) {
      Actions.send(res).error(error);
    }
  }
}

module.exports = new Records(controller);
