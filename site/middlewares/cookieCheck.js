module.exports = (req,res,next) => {
    if (req.cookies.TiendAr) {
        res.session.userLogin = req.cookies.TiendAr
    }
    next()
}