const Quote = document.querySelector(".quote");
const Author = document.querySelector(".author");
const Generate = document.querySelector(".button");


let data = "";
const randomQuotes = () => 
{
  let randomnumber = Math.floor(Math.random() * 1642);
//   console.log(data[randomnumber].text);
//   console.log(data[randomnumber].author);
  Quote.innerText = `${data[randomnumber].text}`;
  Author.innerText = `Author :- ${data[randomnumber].author}`;

  // To change backgroundColor
  const randomColor = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //we can simply write these line without making arrow function, there is no logic behind of writing arrow function ( <-- for confusion purpose).
    Generate.style.backgroundColor = '#' + randomColor;
  }
  randomColor();
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

Generate.addEventListener("click", getQuotes);