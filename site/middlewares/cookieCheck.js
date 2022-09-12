module.exports = (req,res,next) => {
    if (req.cookies.helloCookie) {
        res.session.userLogin = req.cookies.helloCookie
    }
    next()
}