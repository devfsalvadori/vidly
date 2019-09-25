const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access Denied. No authentication token provided.');

    try{
        //const decoded = jwt.verify(token, config.get('jwtprivatekey));
        const decoded = jwt.verify(token, 'mytestprivatekeyjwt');
        req.user = decoded;
        next();
    }
    catch{
        res.status(400).send('Invalid token.');
    }
}

module.exports = auth;