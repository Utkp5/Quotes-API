const Quote = document.querySelector(".quote");
const Author = document.querySelector(".author");
const Generate = document.querySelector(".generate");


let data = "";
const randomQuotes = () => 
{
  let randomnumber = Math.floor(Math.random() * 1642);
//   console.log(data[randomnumber].text);
//   console.log(data[randomnumber].author);
  Quote.innerText = `${data[randomnumber].text}`;
  Author.innerText = `Author :- ${data[randomnumber].author}`;
};

const getQuotes = async () => {
  try {
    let temp = await fetch("https://type.fit/api/quotes");
    data = await temp.json(); // again we have used await because in console we are getting pending request that's why we have written.
    randomQuotes();
    // console.log(data[12].text);
    // console.log(data[12].author);
  } catch (error) {
    console.log(error);
  }
};
// getQuotes();
Generate.addEventListener("click", getQuotes);
