const checkAuth = async (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(' ').pop
        console.log('TOKEN ENVIADO DESDE CHECKAUTH BACK:');
        console.log(token);
    } catch (error) {
        res.status(405)
        res.send({error: "FALTA EL TOKEN"})
    }
}

module.exports = checkAuth