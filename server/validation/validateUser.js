const joi = require("joi");

const validateUser = (req, res, next)=>
{
    const user = req.body;

    const scheema = joi.object({
        _id: joi.string(),
        name: joi.string().required(),
        surname: joi.string().required(),
        email: joi.string().required()
    });

    const {error, value} = scheema.validate(user);
    if(error)
    {
        throw(new ExpressError(`${error}`, 400));
    }

    next();
}

module.exports = validateUser;