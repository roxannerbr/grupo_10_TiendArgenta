module.exports = (req,res,next) => {
    if (req.cookies.TiendArgenta) {
        res.session.userLogin = req.cookies.TiendArgenta
    }
    next()
}