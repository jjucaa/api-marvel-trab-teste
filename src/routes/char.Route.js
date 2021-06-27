const express = require('express')
const controller = require('../controller/char.controller')

const router = express.Router()

/**
 * @swagger
 * /v1/public/characters:
 *  get:
 *    description: Lista todos personagens
 *    responses:
 *      200:
 *        description: A successful response
 */
router.get('/v1/public/characters', controller.listAllChar)
router.get('/v1/public/characters/:id', controller.listChar)
router.get('/v1/public/characters/:id/comics', controller.listCharComic)
router.get('/v1/public/characters/:id/events', controller.listCharEvents)
router.get('/v1/public/characters/:id/series', controller.listCharSeries)
router.get('/v1/public/characters/:id/stories', controller.listCharStories)

module.exports = router