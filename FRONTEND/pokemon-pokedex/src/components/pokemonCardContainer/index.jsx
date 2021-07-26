import React from 'react'

import './Styles.css'

import grass from '../../assets/images/grassType.png'
import fire from '../../assets/images/fireType.png'
import dark from '../../assets/images/darkType.png'
import bug from '../../assets/images/bugType.png'
import dragon from '../../assets/images/dragonType.png'
import electric from '../../assets/images/electricType.png'
import fairy from '../../assets/images/fairyType.png'
import fighting from '../../assets/images/fightingType.png'
import flying from '../../assets/images/flyingType.png'
import ghost from '../../assets/images/ghostType.png'
import ground from '../../assets/images/groundType.png'
import ice from '../../assets/images/iceType.png'
import normal from '../../assets/images/normalType.png'
import psychic from '../../assets/images/psychicType.png'
import rock from '../../assets/images/rockType.png'
import steel from '../../assets/images/steelType.png'
import water from '../../assets/images/waterType.png'
import poison from '../../assets/images/poisonType.png'
import none from '../../assets/images/noneType.png'

function PokemonCardContainer (props) {
    
    function chooseImgType1(){

        
    // var typeArray = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying",
    // "Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock",
    // "Steel","Water"]


    //     for (var i=0;i<18;i++){
    //         if (props.Type1 == typeArray[i])return(typeArray[i])
    //         console.log(typeArray[i])
    //     }




        if (props.Type1 == 'fire')return(fire)
        if (props.Type1 == 'grass')return(grass)
        if (props.Type1 == 'dark')return(dark)
        if (props.Type1 == 'bug')return(bug)
        if (props.Type1 == 'dragon')return(dragon)
        if (props.Type1 == 'electric')return(electric)
        if (props.Type1 == 'fairy')return(fairy)
        if (props.Type1 == 'fighting')return(fighting)
        if (props.Type1 == 'flying')return(flying)
        if (props.Type1 == 'ground')return(ground)
        if (props.Type1 == 'ice')return(ice)
        if (props.Type1 == 'normal')return(normal)
        if (props.Type1 == 'psychic')return(psychic)
        if (props.Type1 == 'rock')return(rock)
        if (props.Type1 == 'steel')return(steel)
        if (props.Type1 == 'water')return(water)
        if (props.Type1 == 'poison')return(poison)
        if (props.Type1 == 'ghost')return(ghost)
    }

    function chooseImgType2(){
        if (props.Type2 == 'fire')return(fire)
        if (props.Type2 == 'grass')return(grass)
        if (props.Type2 == 'dark')return(dark)
        if (props.Type2 == 'bug')return(bug)
        if (props.Type2 == 'dragon')return(dragon)
        if (props.Type2 == 'electric')return(electric)
        if (props.Type2 == 'fairy')return(fairy)
        if (props.Type2 == 'fighting')return(fighting)
        if (props.Type2 == 'flying')return(flying)
        if (props.Type2 == 'ground')return(ground)
        if (props.Type2 == 'ice')return(ice)
        if (props.Type2 == 'normal')return(normal)
        if (props.Type2 == 'psychic')return(psychic)
        if (props.Type2 == 'rock')return(rock)
        if (props.Type2 == 'steel')return(steel)
        if (props.Type2 == 'water')return(water)
        if (props.Type2 == 'poison')return(poison)
        if (props.Type1 == 'ghost')return(ghost)
        else{return(none)}
     }

    function chooseImg(){
        if (props.ImgName < 10){
            return(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${props.ImgName}.png`)
        }
        else if ( props.ImgName < 100) {
            return(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${props.ImgName}.png`)
        }
        else {
            return(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.ImgName}.png`)
        }
    }

    function isLegendary() {
        if (props.Legendary == "1") return ("Yes")
        else return("No")
    }
    return (
        <div className="pokemonCardContainer">
                            <div className="pokemonCard">
                                <div className="imgAndInfoContainer">
                                    <div className="pokemonImgContainer">
                                        <img 
                                        src={chooseImg()} 
                                        alt="Desenho do pokemon" />
                                    </div>
                                    <div className="pokemonInfoContainer">
                                        <p>Name : {props.Name}</p>
                                        <p>Legendary : {isLegendary()}</p>
                                        <p>Type 1 : 
                                            <img src={chooseImgType1()} alt="grass"/>
                                        </p>
                                        <p>Type 2 : <img src={chooseImgType2()} alt="poison" /></p>
                                    </div>
                                </div>
                                <div className="moreInfo1">
                                    <p>Generation : {props.Generation}</p>
                                    <p>Evolution Stage : {props.EvolutionStage}</p>
                                    <p>STAT Total : {props.STATTOTAL}</p>
                                </div>
                                <div className="moreInfo2">
                                    <p>ATK : {props.ATK}</p>
                                    <p>DEF : {props.DEF}</p>
                                    <p>STA : {props.STA}</p>
                                </div>
                                <div className="moreInfo3">
                                    <p style={{'color':'red'}}>More Info</p>
                                </div>
                            </div>
                        </div>
    )
}

export default PokemonCardContainer;