export function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
        errors: {
            escapeHtml: true
        },
        render: false
    };
    const { error, value } = schema.validate(req.body, options);
    console.log(error)
    if (error) {
        next(error);
    } else {
        req.body = value;
        next();
    }
}