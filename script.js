/* .js files add interaction to your website */

var factList = [
  "According to Stop AAPI Hate, by the end of 2021, more than 9,000 violent anti-Asian incidents have been reported since the start of the COVID-19 pandemic.",
"February 2020 - On the New York subway, a man kicked and punched a female Asian passenger after calling her 'diseased'",
"An Asian middle school student was bullied and physically harassed by his classmates, claiming that he had COVID-19.",
"8 women – 6 of which were Asian – were killed in a spa in Atlanta, Georgia by a 22-year-old man solely because most of the women were Korean.",
"March 2021 - 59-year-old Chinese-Filipino man, Danny Yu Chang, was walking on Market Street in San Francisco, California and was in an unprovoked attack when he was punched in the head multiple times.",
"33 hate crimes against Asian people have taken place only in New York within the first 3 months of 2021 alone.",
"March 2021 - a 65-year-old Asian woman was in the New York subway station when she was attacked by a man when he kicked her in the stomach and stomped on her head and body while yelling racist remarks at her. Witnesses, bystanders, and nearby police officers did nothing.",
"June 2022 - In North Hollywood, a Filipino family was at a McDonald’s drive-thru when the man behind them bumped the back of their car and then pulled up next to them and yelled racial remarks at them. When the family’s father arrived at the site, the man got violent with him and his wife.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

//Displays a fact when the Click Here button is clicked
if (myButton) {
myButton.addEventListener("click", displayFact);
}

//Resets fact generator back to the first fact after you click through the whole array
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
