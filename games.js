

/*
10 კითხვა

*/


var questions = [
  "ss",
  "1. ნოტიო ჰავაა, იცის ცივი ზამთარი და ხანმოკლე ზაფხული. საშუალო წლიური ტემპერატურა 5,7 °C ",
  "2. თოვლი იშვიათად მოდის და მალე დნება. ?",
  "3. ემსახურება ადგილობრივი მნიშვნელობის თამარ მეფის სახელობის აეროპორტი?",
  "4. აქ არის სვიმონ მესვეტის ხატი (XI ს., მაცხოვრის ეკლესია), საკურთხევლის წინა ჯვარი და მაცხოვრის ხატი (მთავარანგელოზთა ეკლესია).",
  "5. ბიზანტიის იმპერატორმა იუსტინიანე I-მა აქ ლოსორიონის ციხე (ძვ. ბერძნ. Λοσόριον, მოგვიანებით ცნობილი, როგორც „თამარის ციხე“) ააგო,[10] რომელიც მისი სტრატეგიული ადგილმდებარეობიდან გამომდინარე მნიშვნელოვან როლს ასრულებდა ეგრისის დიდ ომებში სასაზღვრო პუნქტების გამაგრებაში",
  "6. 2010 წელს გაიხსნა ჰაწვალის, ხოლო 2017 წელს ზურულდის საბაგირო გზები.",
  "7. აქ არის  მწვერვალი უშბა, საქართველოს უმაღლესი მწვერვალი შხარა, აზიდული კლდეებიდან გადმომდინარი ჩანჩქერები და ცასავით ლურჯი ალპური ტბები.  ",
  "8. აქ არის  ლამარია და კალის წმ. ივლიტასა და კვირიკეს მონასტერი",
  "9. აქ არის მემულის ტბა",
  "10. აქ არის ნურის ტბა"
]
var answers = [
  "yes",
  "no",
  "yes",
  "yes",
  "no",
  "yes",
  "yes",
  "yes",
  "yes",
  "no",
  "no"
]
var yresponse = document.getElementsByClassName("yes")[0]
var nresponse = document.getElementsByClassName("no")[0]

var id= 0
function next_question(){
  id++
  if (id < answers.length){
  document.querySelector(".where").innerHTML = questions[id]
  }
}
next_question()

function setValue(value){
  if (value == "yes"){
    yresponse.value = value;
  }else{
    nresponse.value = value;
  }
}

var correct = document.querySelector(".correct")
var score = 0
var count=0
function check(){

  var value = answers[id]
    if (value.length > 0){
      if (value == yresponse.value){
        score++
        correct.classList.add("right")
        correct.classList.remove("wrong")
        correct.innerHTML=score
        timeLeft+=5
      }
      else if (value == nresponse.value){
        score++
        correct.classList.add("right")
        correct.classList.remove("wrong")

        correct.innerHTML=score
        timeLeft+=5
      }else {
        timeLeft-=5
        correct.classList.remove("right")
        score-=3
        correct.innerHTML=score
        correct.classList.add("wrong")

      }
      next_question()
    }
}



// timer

timeLeft = 15;
function countdown() {
  if (timeLeft <= 0){
    clearTimeout(timeLeft);
    // წაგება დრო გავიდა
    document.querySelector(".game").style.display="none";
    document.querySelector(".finish").style.display="block";
    var loose = document.querySelector(".loose")
    loose.innerHTML="ძალიან ცუდი რომ წააგე"
    timeLef=9999999999999999
    loose.style.color="red";
    document.querySelector(".finish").style.backgroundColor="white"

  }
	timeLeft--;
	document.querySelector(".timer").innerHTML = String( timeLeft );
  // document.querySelector(".correct").classList.remove("right")

  setTimeout(countdown, 1000);

};

countdown()

// გამოცნობა
// get answers
// jquery.on() used
$(".answer").on("keyup", function(event) {
    if (event.key === "Enter") {
       if ($('.answer').val() == "სვანეთი"){
         // მოგება გამოიცნო
         // window.location.reload()
        document.querySelector(".game").style.display="none"
        document.querySelector(".finish").style.display="block"
        var loose = document.querySelector(".loose")
        loose.innerHTML="ძალიან ცუდი რომ წააგე"

        loose.style.color="white";
        document.querySelector(".finish").style.backgroundColor="green"
        loose.innerHTML = 'გილოცავ! საღოლ!!!!'
        timeLeft=44444444444444444444

      }else{
        document.querySelector(".answer").value =""
      }
    }
});

// starting game
var button = document.querySelector(".starting button")
button.addEventListener("click",function(){
  button.style.display="none"
  document.querySelector(".game").style.display="block"
  timeLeft=15


})
// again
document.querySelector(".again").addEventListener("click", function(){
  document.querySelector(".game").style.display="block";
  document.querySelector(".finish").style.display="none";
  timeLeft=15
  id=0;
  score=0;
  correct.innerHTML =score
  correct.classList.remove("right")
  correct.classList.remove("wrong")
  document.querySelector(".answer").value =""
  next_question()
})
