import React from "react";
import "../../index.css"

const Meanings  = ({meaning, index}) =>{

    return(
        React.Children.toArray(
                            <section key={index}>
                                <h3>{meaning.partOfSpeech}</h3>
                               
                                     <div className="meaning">
                                        {meaning.definitions.map(( value, index) =>{
                                        return(
                                           <div key={index}>
                                            <strong>Similar:</strong>
                                            <p>{value.definition}</p>
                                            <em>{value.example}</em>
                                            </div>
                                        )})}
                                        
                                    </div>
                                    <p className="synonym-antonym-p">Synonyms:</p>
                                <div className="synonyms-antonyms">                                    
                                    <ul>
                                    {meaning.synonyms.map((synonym, index)=>
                                   <li className="column" key={index}>{synonym}</li>
                                    )} 
                                    </ul>                                   
                                </div>
                                     <p className="synonym-antonym-p">Antonyms:</p>
                                    <div className="synonyms-antonyms">
                                    {meaning.antonyms.map((antonym, index)=>
                                    <ul className="column" key={index}><li>{antonym}</li></ul>
                                    )}                                    
                                </div>                                  
                            </section>
        )

    )

}

export default Meanings;