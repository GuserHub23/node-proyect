const Url = require('../models/Url');
const { nanoid } = require('nanoid');

const leerUrls = async (req, res) => {
    try {
        const urls =  await Url.find().lean();
        res.render('home', { urls: urls });
    }
    catch (error) {
        console.log(error)
        res.send(('algo ah fallado'))
    }
};

const agregarUrl = async(req, res) => {
    const { origin } = req.body;

    try {
        const url = new Url({origin: origin, shortUrl: nanoid(10)})
        await url.save()
        res.redirect('/');
    }
    catch (error) {
        console.log(error)
        res.send('error 😛')
    }
}

const eliminarUrl = async (req, res) => {
    const { id } = req.params;
    try {
        
        await Url.findByIdAndDelete(id)

        res.redirect('/');

    } catch (error) {
        console.log(error)
        res.send('error al eliminar url 😛')
    }
}

const editarUrlForm = async (req,res) => {
    const {id} = req.params;
    try {

        const url = await Url.findById(id).lean();
        res.render('home', { url });

    } catch (error) {
        res.send('error al editar la URL');
    }
}

const editarUrl = async (req,res) => {
    const {id} = req.params;
    const {origin} = req.body;
    try {
        await Url.findByIdAndUpdate(id, {origin})
        res.redirect('/')

    } catch (error) {
        res.send('error al editar la URL');
    }
}

const redireccionamiento = async (req, res) => {
    const { shortUrl } = req.params
    try {
        const urlDB = await Url.findOne({shortUrl})
        res.redirect(urlDB.origin)
    } catch(error) {

    }
}

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redireccionamiento
};