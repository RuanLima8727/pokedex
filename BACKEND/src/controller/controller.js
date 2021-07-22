
const model = require("../model/model");



class Controller {
   
    async create (req, res) {
        const poke = new model(req.body)
        await poke.save()
            .then((response=>{return res.status(200).json(req.body)}))
            .catch((error=>{return res.status(500).json(error)}));
    }

    async all (req, res) {
        await model.find()
        .sort('PokedexNumber')
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }
    // Filtros a partir daqui
    async pokedexNumber (req, res) {
        await model.find({'PokedexNumber':req.params.pokedexNumber})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async generation (req, res) {
        await model.find({'Generation':req.params.generation})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async evolutionStage (req, res) {
        await model.find({'EvolutionStage':req.params.evolution})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async type (req, res) {
        await model.find({'Type1':req.params.type})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async twoTypes (req, res) {
        await model.find({
            'Type1':{'$in' : req.params.firstType},
            'Type2': req.params.secondType})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async atk (req, res) {
        await model.find({'ATK': req.params.atk})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async def (req, res) {
        await model.find({'DEF':{'$gte' : req.params.def}})
        .then((response)=>{return res.status(200).json(req.params.def)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async sta (req, res) {
        await model.find({'STA':{'$gte' : req.params.sta}})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async legendary (req, res) {
        await model.find({'Legendary':req.params.legendary})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }

    async name (req, res) {
        await model.find({'Name':req.params.name})
        .then((response)=>{return res.status(200).json(response)})
        .catch((error)=>{return res.status(500).json(error)})
    }
}

    
    

module.exports = new Controller()