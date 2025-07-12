let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let val = document.querySelector('input');
let btn = document.querySelector('button');
btn.addEventListener("click",()=>{
    let h4 = document.querySelector('h4');
    h4.innerText ="";
    let finalURL = url+val.value;
    let voice = axios.get(finalURL);
    console.log(voice);

    voice
    .then((result)=>{
        let audioURL = (result.data[0].phonetics[0].audio);
        let voice = new Audio(audioURL);
    voice.play();
    
    })
    
    .catch((e)=>{
        console.log("Not Available!");
        h4.innerText = "Audio Not Available!Only use meaningful words.";
    });
});
