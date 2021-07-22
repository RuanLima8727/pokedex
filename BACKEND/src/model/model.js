const mongoose = require('../config/database');

const Schema = mongoose.Schema

const PokeSchema = new Schema({
    Row:{type:String, required:true},
    Name: {type:String, required:true},
    PokedexNumber: {type:String, required:true},
    ImgName: {type:String, required:true},
    Generation: {type:String, required:true},
    EvolutionStage: {type:String, required:true},
    Evolved: {type:String, required:true},
    FamilyID: {type:String, required:true},
    CrossGen: {type:String, required:true},
    Type1: {type:String, required:true},
    Type2: {type:String, required:true},
    Weather1: {type:String, required:true},
    Weather2: {type:String, required:true},
    STATTOTAL: {type:String, required:true},
    ATK: {type:String, required:true},
    DEF: {type:String, required:true},
    STA: {type:String, required:true},
    Legendary: {type:String, required:true},
    Aquireable: {type:String, required:true},
    Spawns: {type:String, required:true},
    Regional: {type:String, required:true},
    Raidable: {type:String, required:true},
    Hatchable: {type:String, required:true},
    Shiny: {type:String, required:true},
    Nest: {type:String, required:true},
    New: {type:String, required:true},
    NotGettable: {type:String, required:true},
    FutureEvolve: {type:String, required:true},
    CP40: {type:String, required:true},
    CP39: {type:String, required:true},
})



module.exports = mongoose.model('pokemon',PokeSchema);
