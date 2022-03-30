const { URL } = require('url');

const urlValidar = (req, res, next) => {
    try {
        const { origin } = req.body;
        const urlFronted = new URL(origin);
        if (urlFronted.origin !== 'null') {
            return next();
        } else {
            throw new Error('No es válida 😡 ')
        }
    } catch (error) {
        console.log(error);
        return res.send('url no valida')
    }
};

module.exports = urlValidar;




