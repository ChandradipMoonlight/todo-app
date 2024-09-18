

const handleResponse = (res, data) => {
    res.json({
            status : true,
            data : data
        })
};

const handleError = (res, error) => {
    res.json({
        status : false,
        data : error,
    })
};


module.exports = {
    handleResponse,
    handleError,
}