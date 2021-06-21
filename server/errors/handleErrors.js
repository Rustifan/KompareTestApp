const handleErrors = (err, req, res, next)=>
{
    console.log(err);
    if(err.errorMessage && err.status)
    {
        res.status(err.status).send(err.errorMessage);
        return;
    }

    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV === "development")
    {
        res.status(500).send(err.stack);
        return;
    }

    res.sendStatus(500);
};

module.exports = handleErrors;