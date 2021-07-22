import React from 'react'
import './Styles.css'

import pokemonLogo from '../assets/images/pokemonLogo.png'
import linkedinImage from '../assets/images/linkedin-footer.svg'
import githubImage from '../assets/images/github-footer.svg'
import pokemonImg from '../assets/images/001.png'

import grass from '../assets/images/grassType.png'
import poison from '../assets/images/poisonType.png'

function Home (){
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
                                        <button type="submit" className="btn btn-dark">Go</button>
                                    </div>
                                </form>
                                <form>
                                    <div className="form-group">
                                        <label for="pokeNumberInput">Number</label>
                                        <input type="text" className="form-control" id="pokeNumberInput" placeholder="Pokedex Number"/>
                                        <button type="submit" className="btn btn-dark">Go</button>
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
                                                checked
                                            />
                                            <label 
                                                className="form-check-label" 
                                                for="flexRadioDefault2"
                                            >
                                                Yes
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-dark">Go</button>
                                    </div>
                                </form>

                                
                            </div>
                            <div className="filterTwo">
                                <div className="allContainer">
                                    <button className="btn btn-primary">ALL</button>
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
                                                <a className="dropdown-item" href="#">Generation 1</a>
                                                <a className="dropdown-item" href="#">Generation 2</a>
                                                <a className="dropdown-item" href="#">Generation 3</a>
                                                <a className="dropdown-item" href="#">Generation 4</a>
                                                <a className="dropdown-item" href="#">Generation 5</a>
                                                <a className="dropdown-item" href="#">Generation 6</a>
                                                <a className="dropdown-item" href="#">Generation 7</a>
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
                                                <a className="dropdown-item" href="#">Stage 1</a>
                                                <a className="dropdown-item" href="#">Stage 2</a>
                                                <a className="dropdown-item" href="#">Stage 3</a>
                                                <a className="dropdown-item" href="#">Lower</a>
                                                <a className="dropdown-item" href="#">Evolved</a>
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
                                            >
                                                Type1
                                            </button>
                                        
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Bug</a>
                                                <a className="dropdown-item" href="#">Dark</a>
                                                <a className="dropdown-item" href="#">Dragon</a>
                                                <a className="dropdown-item" href="#">Eletric</a>
                                                <a className="dropdown-item" href="#">Fairy</a>
                                                <a className="dropdown-item" href="#">Fighting</a>
                                                <a className="dropdown-item" href="#">Fire</a>
                                                <a className="dropdown-item" href="#">Flying</a>
                                                <a className="dropdown-item" href="#">Ghost</a>
                                                <a className="dropdown-item" href="#">Grass</a>
                                                <a className="dropdown-item" href="#">Ground</a>
                                                <a className="dropdown-item" href="#">Ice</a>
                                                <a className="dropdown-item" href="#">Normal</a>
                                                <a className="dropdown-item" href="#">Poison</a>
                                                <a className="dropdown-item" href="#">Psychic</a>
                                                <a className="dropdown-item" href="#">Rock</a>
                                                <a className="dropdown-item" href="#">Steel</a>
                                                <a className="dropdown-item" href="#">Water</a>
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
                                            >
                                                Type2
                                            </button>
                                                
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">None</a>
                                                <a className="dropdown-item" href="#">Bug</a>
                                                <a className="dropdown-item" href="#">Dark</a>
                                                <a className="dropdown-item" href="#">Dragon</a>
                                                <a className="dropdown-item" href="#">Eletric</a>
                                                <a className="dropdown-item" href="#">Fairy</a>
                                                <a className="dropdown-item" href="#">Fighting</a>
                                                <a className="dropdown-item" href="#">Fire</a>
                                                <a className="dropdown-item" href="#">Flying</a>
                                                <a className="dropdown-item" href="#">Ghost</a>
                                                <a className="dropdown-item" href="#">Grass</a>
                                                <a className="dropdown-item" href="#">Ground</a>
                                                <a className="dropdown-item" href="#">Ice</a>
                                                <a className="dropdown-item" href="#">Normal</a>
                                                <a className="dropdown-item" href="#">Poison</a>
                                                <a className="dropdown-item" href="#">Psychic</a>
                                                <a className="dropdown-item" href="#">Rock</a>
                                                <a className="dropdown-item" href="#">Steel</a>
                                                <a className="dropdown-item" href="#">Water</a>
                                            </div>
                                        </div>
                                </div>
                                    
                                </div>

                                <div className="goContainer">
                                    <button className="btn btn-dark">GO</button>
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
                        <div className="pokemonCardContainer">
                            <div className="pokemonCard">
                                <div className="imgAndInfoContainer">
                                    <div className="pokemonImgContainer">
                                        <img src={pokemonImg} alt="Desenho do pokemon" />
                                    </div>
                                    <div className="pokemonInfoContainer">
                                        <p>Name : Bulbasaur</p>
                                        <p>Legendary : No</p>
                                        <p>Type 1 : <img src={grass} alt="grassType" /></p>
                                        <p>Type 2 : <img src={poison} alt="poisonType" /></p>
                                    </div>
                                </div>
                                <div className="moreInfo1">
                                    <p>Generation : 1</p>
                                    <p>Evolution Stage : 1</p>
                                    <p>STAT Total : 326</p>
                                </div>
                                <div className="moreInfo2">
                                    <p>ATK : 118</p>
                                    <p>DEF : 118</p>
                                    <p>STA : 90</p>
                                </div>
                                <div className="moreInfo3">
                                    <p style={{'color':'red'}}>More Info</p>
                                </div>
                            </div>
                        </div>
                        <div className="pokemonCardContainer">
                            <div className="pokemonCard">
                                
                            </div>
                        </div>
                        
                        
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