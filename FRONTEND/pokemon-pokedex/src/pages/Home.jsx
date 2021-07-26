import React, { useState, useEffect } from 'react';
import './Styles.css'

import api from '../services/api'

// Images
import pokemonLogo from '../assets/images/pokemonLogo.png'
import linkedinImage from '../assets/images/linkedin-footer.svg'
import githubImage from '../assets/images/github-footer.svg'

//Componenents
import PokemonCardContainer from '../components/pokemonCardContainer'
import DropdownItem from '../components/dropdownItem'


    //Setando as variaveis aqui para que a recarga do componente não atrapalhe seus valores
    var keepType2 = ""
    var keepType1 = "" 

function Home (){

    //Array para criação otimizada dos itens do dropdown
    var typeDropdown = [
        "Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying",
        "Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock",
        "Steel","Water"
    ]

    //Funções para consumo da API
    
    const [get, getPokemon] = useState([]);
    const [settype, setPokemonType] = useState("Choose Type");
    const [settype2, setPokemonType2] = useState("Choose Type");
    

    async function getAll () {
        await api.get('/pokedex/all')
        .then((response)=>{getPokemon(response.data)})
        
    }
    useEffect(()=>{getAll()}, [])

    async function getFiltered (getF) {
        await api.get(`/pokedex/filter/${getF}`)
        .then((response)=>{getPokemon(response.data)})
        console.log("Filtro chamado")
    }

    function isLegendary (e) {
        if (e.target.form[0].checked == false) {
            getFiltered('legendary/1')
        }
         else{
             getFiltered('legendary/0')
            }
    }

    
    function getType (typeFilter, t2) {
        
        if (t2 == "2") {
            keepType2 = typeFilter
            setPokemonType2(keepType2)
            console.log(keepType2)
        }
        else if (typeFilter != "GO") {
            keepType1 = typeFilter
            setPokemonType(keepType1)
            console.log(keepType1)
        }

        else if (keepType2 == "none") {
            console.log(`type/${keepType1}`)
            getFiltered(`type/${keepType1}`)
        }

        else {
            console.log(`type/${keepType1}/${keepType2}`)
            getFiltered(`type/${keepType1}/${keepType2}`)
        }

    }

    function getNumber (e) {

        getFiltered(`number/${e.target.form[0].value}`)
            console.log(e.target.form[0].value)
        }
    
    function getName (e) {

        var uCase = e.target.form[0].value
        var nameUpperCase = uCase[0].toUpperCase() + uCase.substr(1)
            getFiltered(`name/${nameUpperCase}`)
            }
        

     return (
        <div>
            <div className="section-1">
            <div className="box">
                <header>
                    <img src={pokemonLogo} alt="Logo do site" />
                    <nav>
                        <button className="btn btn-primary" >Create New</button>
                        <button className="btn btn-primary">Edit Register</button> 
                    </nav>
                </header>
                <main>
                    <section>
                        <h2>Filtros</h2>
                    </section>
                    <section>
                        <div className="filterContainer">
                            <div className="filterOne">
                                <form>
                                    <div className="form-group">
                                        <label for="nameInput">Name</label>
                                        <input type="text" className="form-control" id="nameInput" placeholder="Pokémon Name"/>
                                        <button 
                                            type="button" 
                                            className="btn btn-dark"
                                            onClick={(e)=>{getName(e)}}
                                        >Go</button>
                                    </div>
                                </form>
                                <form>
                                    <div className="form-group">
                                        <label for="pokeNumberInput">Number</label>
                                        <input type="text" className="form-control" id="pokeNumberInput" placeholder="Pokedex Number"/>
                                        <button 
                                            type="button" 
                                            className="btn btn-dark" 
                                            onClick={(e)=>{getNumber(e)}}
                                        >Go</button>
                                    </div>
                                </form>
                                <form>
                                    <div className="radioContainer">
                                        <label >Legendary</label>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="flexRadioDefault" 
                                                id="flexRadioDefault1"
                                                checked
                                            />
                                            <label 
                                                className="form-check-label" 
                                                for="flexRadioDefault1"
                                            >
                                                No
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="radio"
                                                name="flexRadioDefault" 
                                                id="flexRadioDefault2"                                          
                                            />
                                            <label 
                                                className="form-check-label" 
                                                for="flexRadioDefault2"
                                            >
                                                Yes
                                            </label>
                                        </div>
                                        <button 
                                            type="button" 
                                            className="btn btn-dark" 
                                            onClick={(e)=>{isLegendary(e)}}
                                        >Go</button>
                                    </div>
                                </form>

                                
                            </div>
                            <div className="filterTwo">
                                <div className="allContainer">
                                    <button onClick={()=>{getAll()}} className="btn btn-primary">ALL</button>
                                </div>

                                <div className="dropdownContainer">
                                   <div className="firstCouple">
                                        <div className="dropdown">
                                            <button 
                                                className="btn btn-dark dropdown-toggle" 
                                                type="button" 
                                                id="dropdownMenuButton" 
                                                data-toggle="dropdown" 
                                                aria-haspopup="true" 
                                                aria-expanded="false"
                                            >
                                                Generation
                                            </button>
                                            
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <DropdownItem text={"Generation 1"} 
                                                    getFilter={()=>{getFiltered("generation/1")}}
                                                />

                                                <DropdownItem text={"Generation 2"} 
                                                    getFilter={()=>{getFiltered("generation/2")}}
                                                />
                                                <DropdownItem text={"Generation 3"} 
                                                    getFilter={()=>{getFiltered("generation/3")}}
                                                />
                                                <DropdownItem text={"Generation 4"} 
                                                    getFilter={()=>{getFiltered("generation/4")}}
                                                />
                                                <DropdownItem text={"Generation 5"} 
                                                    getFilter={()=>{getFiltered("generation/5")}}
                                                />
                                                <DropdownItem text={"Generation 6"} 
                                                    getFilter={()=>{getFiltered("generation/6")}}
                                                />
                                                <DropdownItem text={"Generation 7"} 
                                                    getFilter={()=>{getFiltered("generation/7")}}
                                                />
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <button 
                                                className="btn btn-dark dropdown-toggle" 
                                                type="button" 
                                                id="dropdownMenuButton" 
                                                data-toggle="dropdown" 
                                                aria-haspopup="true" 
                                                aria-expanded="false"
                                            >
                                                Stage
                                            </button>
                                            
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <DropdownItem text={"Stage 1"} 
                                                    getFilter={()=>{getFiltered("evolution/1")}} 
                                                />

                                                <DropdownItem text={"Stage 2"} 
                                                    getFilter={()=>{getFiltered("evolution/2")}}
                                                />

                                                <DropdownItem text={"Stage 3"} 
                                                    getFilter={()=>{getFiltered("evolution/3")}}
                                                />

                                                <DropdownItem text={"Lower"} 
                                                    getFilter={()=>{getFiltered("evolution/Lower")}}
                                                />

                                                <DropdownItem text={"Evolved"} 
                                                    getFilter={()=>{getFiltered("evolution/Evolved")}}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="secondCouple">
                                        <div className="dropdown">
                                            <button 
                                                className="btn btn-dark dropdown-toggle" 
                                                type="button" 
                                                id="dropdownMenuButton" 
                                                data-toggle="dropdown" 
                                                aria-haspopup="true" 
                                                aria-expanded="false"
                                            > {settype}
                                            </button>
                                        
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                {typeDropdown.map((item)=>{
                                                    return(
                                                    <DropdownItem 
                                                        text={item} 
                                                        getFilter={()=> {
                                                            getType(`${item}`.toLowerCase())
                                                        }} 
                                                    />)
                                                })}
                                            </div>
                                        </div>
                                        <div className="dropdown ">
                                            <button 
                                                className="btn btn-dark dropdown-toggle" 
                                                type="button" 
                                                id="dropdownMenuButton" 
                                                data-toggle="dropdown" 
                                                aria-haspopup="true" 
                                                aria-expanded="false"
                                            > {settype2}
                                            </button>
                                                
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <DropdownItem 
                                                        text={"None"}
                                                        getFilter={(e)=> {
                                                            getType(`${"None"}`.toLowerCase(), "2")
                                                        }} 
                                                        />
                                                {typeDropdown.map((item)=>{
                                                     return(
                                                     <DropdownItem 
                                                        text={item}
                                                        getFilter={()=> {
                                                            getType(`${item}`.toLowerCase(), "2")
                                                        }} 
                                                    />)
                                                })}
                                            </div>
                                        </div>
                                </div>
                                    
                                </div> 

                                <div className="goContainer">
                                    <button className="btn btn-dark" onClick={()=>{getType("GO")}} >GO for Types</button>
                                </div>

                            </div>

                            <div className="filterThree">
                                <form>
                                    <div className="form-group">
                                        <label for="pokemonAtk">ATK</label>
                                        <input type="text" className="form-control" id="pokemonAtk" placeholder="Put The Attack"/>
                                        <button type="submit" className="btn btn-dark">Go</button>
                                    </div>
                                    </form>
                                <form>
                                    <div className="form-group">
                                        <label for="pokemonDef">DEF</label>
                                        <input type="text" className="form-control" id="pokemonDef" placeholder="Put The Defense"/>
                                        <button type="submit" className="btn btn-dark">Go</button>
                                    </div>
                                </form>
                                <form>
                                    <div className="form-group">
                                        <label for="pokemonSta">STA</label>
                                        <input type="text" className="form-control" id="pokemonSta" placeholder="Put The Stamina"/>
                                        <button type="submit" className="btn btn-dark">Go</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
              </main>
            </div>
            </div>
            <div className="section-2">
                <div className="box">
                    <div className="pokemonContainer">
                        {get.map((element)=>{                            
                            return (
                                <PokemonCardContainer 
                                // INFORMAÇÕES DO CARD PRINCIPAL
                                    ImgName={element.ImgName} 
                                    Name={element.Name}
                                    Legendary={element.Legendary}
                                    Type1={element.Type1}
                                    Type2={element.Type2}
                                    Generation={element.Generation}
                                    ATK={element.ATK}
                                    DEF={element.DEF}
                                    STA={element.STA}
                                    EvolutionStage={element.EvolutionStage}
                                    STATTOTAL={element.STATTOTAL}
                                //INFORMAÇÕES DO CARD ADICIONAL (A FAZER)
                                />
                            )

                        }) }        
                    </div>
                </div>
            </div>
            <footer>
            <div className="box" >
                <div className="link">
                    <a href="https://github.com/RuanLima8727">
                        <img src={githubImage} alt="Github do autor do site" />
                    </a>

                    <a href="https://www.linkedin.com/in/ruan-ribeiro/">
                        <img src={linkedinImage} alt="Linkedin do autor do site" />
                    </a>
                </div>
                <div className="copyright">
                    <p>&copy; Pokedex - Ruan Lima -  {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
        </div>   
     )
}

export default Home