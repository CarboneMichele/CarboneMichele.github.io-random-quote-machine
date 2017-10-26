var quotesArray=[
{
  quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
  author:"Francis of Assisi"
  },
  {
    quote:"Believe you can and you're halfway there.",
    author:"Theodore Roosevelt"
  },
  {
    quote:"It does not matter how slowly you go as long as you do not stop.",
    author:"Confucius"
  },
  {
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author:"Thomas A. Edison"
  },
  {
    quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    author:"Confucius"
  },
  {
    quote:"Don't watch the clock; do what it does. Keep going.",
    author:"Sam Levenson"
  },
  {
    quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author:"Ayn Rand"
  },
  {
    quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author:"Ayn Rand"
  },
  {
    quote:"Expect problems and eat them for breakfast.",
    author:"Alfred A. Montapert"
  },
  {
    quote:"Start where you are. Use what you have. Do what you can.",
    author:"Arthur Ashe"
  },
  {
    quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author:"Samuel Beckett"
  },
  {
    quote:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde"
  },
  {
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author:"Albert Einstein"
  },
  {
    quote:"Always remember that you are absolutely unique. Just like everyone else.",
    author:"Margaret Mead"
  },
  {
    quote:"Do not take life too seriously. You will never get out of it alive.",
    author:"Elbert Hubbard"
  },
  {
    quote:"People who think they know everything are a great annoyance to those of us who do.",
    author:"Isaac Asimov"
  },
  {
    quote:"Procrastination is the art of keeping up with yesterday.",
    author:"Don Marquis"
  },
  {
    quote:"Get your facts first, then you can distort them as you please.",
    author:"Mark Twain"
  },
  {
    quote:"A day without sunshine is like, you know, night.",
    author:"Steve Martin"
  },
  {
    quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
    author:"Ellen DeGeneres"
  },
  {
    quote:"Don't sweat the petty things and don't pet the sweaty things.",
    author:"George Carlin"
  },
  {
    quote:"Always do whatever's next.",
    author:"George Carlin"
  },
  {
    quote:"Atheism is a non-prophet organization.",
    author:"George Carlin"
  },
  {
    quote:"Hapiness is not something ready made. It comes from your own actions.",
    author:"Dalai Lama"
  }

];

var random=Math.floor(Math.random() * ((quotesArray.length-1) - 0 + 1)) + 0;
var previousQuote;
var keepTrack=[];
var i=keepTrack.length;
var j=0;

function createButton() {

  var quote;
  var author;

  if(j%2==0){
    quote=document.querySelector(".quoteFront").innerHTML;
    quote=quote.replace(/\s/g,"%20");
    quote=quote.replace(/;/g,",");
    author=document.querySelector(".authorFront").innerHTML;
  }
  else{
    quote=document.querySelector(".quoteBack").innerHTML;
    quote=quote.replace(/\s/g,"%20");
    quote=quote.replace(/;/g,",");
    author=document.querySelector(".authorBack").innerHTML;
  }

  var link = document.getElementById("tweet");

  link.setAttribute("href", "http://twitter.com/share?&text="+quote+" "+"("+author.replace("-","")+")");
  link.setAttribute("target","_blank");

  }

function getInitialText(){

  document.querySelector(".quoteFront").innerHTML=quotesArray[random].quote;
  document.querySelector(".authorFront").innerHTML="- " + quotesArray[random].author;
  createButton();
  console.log(document.querySelector(".quoteFront").innerHTML);



}


function getRandomQuote(){

  j++;

  var random=Math.floor(Math.random() * ((quotesArray.length-1) - 0 + 1)) + 0;

  if(previousQuote===random){
      random++;
   }

  if(j %2===0){
    document.querySelector(".quoteFront").innerHTML=quotesArray[random].quote;
    document.querySelector(".authorFront").innerHTML="- " + quotesArray[random].author;
    createButton();

  } else{
    document.querySelector(".quoteBack").innerHTML=quotesArray[random].quote;
    document.querySelector(".authorBack").innerHTML="- " + quotesArray[random].author;
    createButton();

  }

  document.querySelector(".flip-container").classList.toggle("flip");
  keepTrack.push(previousQuote);
  i=keepTrack.length;
  previousQuote=random;
  console.log(i);




}


function getPreviousQuote(){

    j--;

    if(i==1){
      keepTrack[0]=random;
    }
    if(i==0){
      return;
    }
    i--;



    if(j%2==0){

      document.querySelector(".quoteFront").innerHTML=quotesArray[keepTrack[i]].quote;
      document.querySelector(".authorFront").innerHTML="- " + quotesArray[keepTrack[i]].author;
      createButton();


     }
     else{


       document.querySelector(".quoteBack").innerHTML=quotesArray[keepTrack[i]].quote;
       document.querySelector(".authorBack").innerHTML="- " + quotesArray[keepTrack[i]].author;
       createButton();


     }

     document.querySelector(".flip-container").classList.toggle("flip");


  }
