import { useState } from "react"

export default function GifSearch({setGif}) {
    
    const [searchWord, setSearchWord] = useState("");
    console.log(searchWord);

    
    async function handleSubmit(evt) {
        evt.preventDefault();
        const endpoint = `http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=jHPYFiL1kCpxbOCrBpsLrh7NJgJHRX7e`;
        const response = await fetch(endpoint);
        const body = await response.json();
        // console.log(body);
        const randIdx = Math.floor(Math.random()*body.data.length-1)
        setGif(body.data[randIdx]);
        setSearchWord("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={searchWord}
                onChange={(evt) => {
                    setSearchWord(evt.target.value)
                }}
                placeholder="type of gif" 
            />
            <button type="submit">Search Gif</button>
        </form>
    )
}