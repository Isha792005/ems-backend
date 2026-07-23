const errorHandler = (err, req, res, next) => {
    res.staus(res.statusCode || 500).json({
        success: false,
        message:err.message
    })
}
export default errorHandler;