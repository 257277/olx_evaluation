const bcrypt = require('bcrypt');

const hashing = (req, res, next) => {
    bcrypt.hash(req.body.password, 5, function (err, hash) {
        if (err) {
            res.send("Something went wrong");
        }
        else {
            req.body.password = hash;
            next();
        }
    });
}

module.exports =
{
    hashing
}