const api_url = "https://api.quotable.io/random";
const newQuote = document.getElementById("new-quote");
const twitterbtn = document.getElementById("twitter-btn");
const quotes = document.getElementById("quote");
const authors = document.getElementById("author");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quotes.innerHTML = data.content;
    authors.innerHTML = data.author;
}
newQuote.addEventListener("click", ()=>{
    getquote(api_url);
})
twitterbtn.addEventListener("click", ()=>{
    tweet();
});
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quotes.innerHTML + 
    "----" + authors.innerHTML, "Tweet Widow", "width=600, height=300");
}