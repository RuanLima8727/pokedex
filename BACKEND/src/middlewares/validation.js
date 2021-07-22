const model = require('../model/model')
const {isPast} = require('date-fns')

const Validation = async function(req, res, next) {
    const validation = [Name, PokedexNumber, ImgName, Generation, EvolutionStage,
        Evolved ,FamilyID ,CrossGen ,Type1 ,Type2 ,Weather1 ,
        Weather2 ,STATTOTAL ,ATK ,DEF ,STA ,
        Legendary ,Aquireable ,Spawns ,Regional ,
        Raidable ,Hatchable ,Shiny ,Nest ,New ,
        NotGettable ,FutureEvolve ,CP40 ,CP39] 

// AAAAAAAA
        //Para consumir um valor do json que vem como body, use :
        //var teste = req.body
        //teste["ATK"], use a chave para consumir o valor, preencha as chaves no array a cima e use iteração
        //para ir trocando as chaves durante o for



    // if(!Name) {
    //     return res.status(400).json({error:"McAdress está vazio"})
    // }
    // else if (!PokedexNumber) {
    //     return res.status(400).json({error:"Tipo (Type) está vazio"})
    // }
    // else if (!ImgName) {
    //     return res.status(404).json({error:"Titulo está vazio"})
    // }
    // else if (!Generation) {
    //     return res.status(400).json({error:"A descrição está vazia"})
    // }
    // else if (!EvolutionStage) {
    //     return res.status(400).json({error:"O when está vazio"})
    // }
    
    for (i=0;i< validation.length; i++) {
        if (!validation[i]) {
            return res.status(404).json({error: i + " está vazio"})
        } 
    }
    






     if (isPast(new Date(when))) {
        return res.status(400).json({error:"A data escohlida está no passado"})
    }
    else {
        let exists;
        //Os 2 problemas resolvidos
        //1-Atualizar uma tarefa B para ter a mesma data que uma tarefa A e assim ter duas tarefas na mesma data
        //2-Não permitir atualizações de uma tarefa pois o código bloqueia atualização para quem tem a mesma data

        if (req.params.id) {
            //IF que será executado quando for feito um update
            //Vai verificar se alguma outra tarefa além da em questão 
            //Possui a mesma data que está sendo mandada
            //Na requisição
             exists = await model.findOne(
                {
                '_id' : {'$ne' : req.params.id}, //Tirando eu, tem alguma tarefa nessa mesma data?
                'when': {'$eq' : new Date(when)},
                'macaddress':{'$in': macaddress}
                })
        }

        else {
             exists = await model.findOne(
                {
                'when': {'$eq' : new Date(when)},
                'macaddress':{'$in': macaddress}
                })
        }

        if (exists) {
            return res.status(400).json({error:"Você ja possui uma tarefa para tal data"})
        }

        next()
    }


}

module.exports = Validation;