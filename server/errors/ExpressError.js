class ExpressError
{
    constructor(errorMessage, status)
    {
        this.errorMessage = errorMessage;
        this.status = status;
    }
}

module.exports = ExpressError;