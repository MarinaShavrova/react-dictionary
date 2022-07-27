import React, {useState, useEffect} from "react";
import axios from "axios";
import "../../index.css"
import Meanings from "./Meanings";


const Description = ({inputValue}) =>{
    let [word, setWord] = useState([{ ready: false }]);
    let [photos, setPhotos] = useState([{ ready: false }]);
    let [loading, setLoading] = useState(false);

        useEffect(() => {
        if(inputValue.length != 0){
            search();
        }
        } , [inputValue]);


    const showDictionaryResult = (response) =>{
        setWord({
        ready: true,
        word: response.data[0].word,
        phonetic : response.data[0].phonetic,
        audio : response.data[0].phonetics[0].audio,
        partOfSpeech : response.data[0].meanings[0].partOfSpeech,
        meanings : response.data[0].meanings  
    });
       searchPexel();
    }

    function showPexelsResponse(response) {
        setPhotos(response.data.photos);
        setLoading(true);
   
  }

        const search = () => {
        if(inputValue.length != 0){
            
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;    
            axios.get(apiUrl).then(showDictionaryResult).catch(err => { 
                console.log(err.response.data.title)
                console.log(err.response.data.message)
                console.log(err.response.data.resolution)
        alert(
            `${err.response.data.title}. ${err.response.data.message}. ${err.response.data.resolution}
            `
        );
        })
    }
        } 

        const searchPexel = () =>{
            let pexelsApiKey =
            "563492ad6f91700001000001d6c2db67b7ab434f8d40dc1785c374b2";
            let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${inputValue}&per_page=9`;
            let headers = { Authorization: `Bearer ${pexelsApiKey}` };
            axios.get(pexelsApiUrl, { headers: headers }).then(showPexelsResponse);
        } 
        

 if (loading) {
     console.log(photos)
    return (
        <>
        <div className="result">
        <section>
            <h1>{word.word}</h1>
                <div className="phonetic">
                    <a href={word.audio} target="_blank" rel="noopener noreferrer">Listen</a>
                    <h2> {word.phonetic}</h2>
                </div>
            </section>                     
                {word.meanings.map((meaning, index) =>{
                        return(
                            <Meanings key={index} meaning = {meaning}/>                                           
                        )})} 
        
        </div> 
            <section className="photos">
            <div className="row">
                {photos.map(function (photo, index) {
                    return (
                <div className="col-4">
                    <a href={photo.src.original} target="_blank" rel="noreferrer">
                        <img
                        src={photo.src.landscape}
                        className="img-fluid"
                        alt={photo.photographer}
                        />
                    </a>
                </div>
                )})}
            </div>
        </section>
       </>
    )
}
} 

export default Description;