{/* <div id="joke" class="joke">Awsome jokes is loading...</div> */}
{/* <button id="jokebtn" class="btn">NEXT JOKE</button> */}

// PROMISES
// 2cond => succ => no sucess
fetch
// GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector('#jokebtn');

const generateJokes =()=>{
   const setHeader ={
    headers:{
        Accept : "application/json"
    }}
    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res)=> res.json() )
    .then((data)=>{
        jokes.innerHTML = data.joke;
    // {console.log(res.json());
          //  res.json()
    }).catch((error) =>{
        console.log(error);
    })
}


jokeBtn.addEventListener('click',generateJokes);

