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
                                <div className="synonyms-antonyms">
                                    <p>Synonyms:</p>
                                    {meaning.synonyms.map((synonym, index)=>
                                    <ul  key={index}><li>{synonym}</li></ul>
                                    )}                                    
                                </div>
                                    <div className="synonyms-antonyms">
                                    <p>Antonyms:</p>
                                    {meaning.antonyms.map((antonym, index)=>
                                    <ul key={index}><li>{antonym}</li></ul>
                                    )}                                    
                                </div>                                  
                            </section>
        )

    )

}

export default Meanings;