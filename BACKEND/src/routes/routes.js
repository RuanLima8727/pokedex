const express = require('express')
const router = express.Router()


const Controller = require("../controller/controller")


router.post('/create', Controller.create)
router.get('/all',   Controller.all)
router.get('/filter/number/:pokedexNumber',   Controller.pokedexNumber)
router.get('/filter/generation/:generation',   Controller.generation)
router.get('/filter/evolution/:evolution',   Controller.evolutionStage)
router.get('/filter/type/:type',   Controller.type)
router.get('/filter/type/:firstType/:secondType',   Controller.twoTypes)
router.get('/filter/status/atk/:atk',   Controller.atk)
router.get('/filter/status/def/:def',   Controller.def)
router.get('/filter/status/sta/:sta',   Controller.sta)
router.get('/filter/legendary/:legendary',   Controller.legendary)
router.get('/filter/name/:name',   Controller.name)

module.exports = router;
