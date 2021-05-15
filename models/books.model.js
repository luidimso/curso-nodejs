import Joi from 'joi';
import { validateRequest } from '../common/schema-validator.js';

export function createBookSchema(req, res, next) {
    const schema = Joi.object({
        id: Joi.number().required(),
        title: Joi.string().required(),
        type: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

export function updateBookSchema(req, res, next) {
    const schema = Joi.object({
        id: Joi.number().empty(''),
        title: Joi.string().empty(''),
        type: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}