const accessUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newquote = document.getElementById("newquote");
const tweeter = document.getElementById("tweet");

async function getRandom(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text= + " +
      quote.innerHTML +
      "        ---- by:  " +
      author.innerHTML,
    "tweet window",
    "width=900, height=700"
  );
}

getRandom(accessUrl);
newquote.addEventListener("click", getRandom.bind(null, accessUrl));

tweeter.addEventListener("click", tweet);
