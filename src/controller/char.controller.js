const axios = require('axios')

const ts = '789465135'
const apikey = '1f17ccd6d401ef2b6a8afad46051ce12'
const urlAll = 'http://gateway.marvel.com/v1/public/characters'
const hash = 'c3eb60df57adbb77f8fa3b6ce45a3e72'

const listAllChar = async (req, res) => {
    var url = urlAll + endUrl()
    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data)
    })
}

const listChar = async (req, res) => {
    var id = req.params.id;
    var url = urlAll + '/' + id + endUrl();

    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character with id (${id}) not found`
        });
    });
}

const listCharComic = async (req, res) => {
    var id = req.params.id;
    var url = urlAll + '/' + id + '/comics' + endUrl();

    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character comics with id (${id}) not found`
        });
    });
}

const listCharEvents = async (req, res) => {
    var id = req.params.id;
    var url = urlAll + '/' + id + '/events' + endUrl();

    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character events with id (${id}) not found`
        });
    });
}

const listCharSeries = async (req, res) => {
    var id = req.params.id;
    var url = urlAll + '/' + id + '/series' + endUrl();

    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character series with id (${id}) not found`
        });
    });
}

const listCharStories = async (req, res) => {
    var id = req.params.id;
    var url = urlAll + '/' + id + '/stories' + endUrl();

    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character stories with id (${id}) not found`
        });
    });
}

function endUrl() {
    return '?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
}

module.exports = {
    listAllChar,
    listChar,
    listCharComic,
    listCharEvents,
    listCharSeries,
    listCharStories
}