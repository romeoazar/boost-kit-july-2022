function main() {
  //== variabels ===================================
  var _wheel = document.querySelector("#wheel");
  var _arrow = document.querySelector("#arrow");
  var _jackpotDisp = document.querySelector("#jackpot");
  var _jackpot = 0;
  var _scoreDisp = document.querySelector("#score");
  var _score = 0;
  var _deg = 7.5;
  var _position = _deg % 360;
  let _textGuess = document.querySelector("#test-box");


	//== Questions and answers ===================================

let questions = [
  {
    title:
      "You can practice Zelle<sup>®</sup> through CEI with a peer, yourself or a family member.",
    alternatives: ["True", "False"],
    correctAnswer: 1,
    overlay:
      " You can’t practice sending a penny with Zelle<sup>®</sup> to yourself."
  },
  {
    title:
      "Business customers will incur a one-time fee to enroll in Zelle<sup>®</sup>. ",
    alternatives: ["True", "False"],
    correctAnswer: 1,
    overlay:
      " There’s currently no fee for Business customers to enroll, send or receive money with Zelle<sup>®</sup>  at U.S. Bank.​"
  },
  {
    title:
      "To enroll an eligible business account with Zelle<sup>®</sup>, you must use a different U.S. mobile number or email address than the one you used to enroll your personal bank account with Zelle<sup>®</sup>.",
    alternatives: ["True", "False"],
    correctAnswer: 0,
    overlay:
      "You can use an email address to connect a personal bank account and a business U.S. mobile phone number to connect a business bank account."
  },
  {
    title:
      "You can send up to $2500 to trusted recipients with Zelle<sup>®</sup>.",
    alternatives: ["True", "False"],
    correctAnswer: 1,
    overlay:
      "You can view daily transactions limits in the U.S. Bank Mobile App."
  },
  {
    title:
      "You can now add a Zelle<sup>®</sup> widget to the home screen of your Apple device.",
    alternatives: ["True", "False"],
    correctAnswer: 0,
    overlay:
      "Zelle<sup>®</sup> widgets allow you to send money faster to the people you know and trust."
  },
  {
    title:
      "You can send a penny to a customer with Zelle<sup>®</sup> using CEI and the customer’s profile.",
    alternatives: ["True", "False"],
    correctAnswer: 0,
    overlay:
      "A customer doesn’t need to be in person to send them a penny with Zelle<sup>®</sup>."
  },
  {
    title:
      "Zelle<sup>®</sup> Ready Contacts are contacts that only bank at U.S. Bank. ",
    alternatives: ["True", "False"],
    correctAnswer: 1,
    overlay:
      "Anyone enrolled with Zelle<sup>®</sup>, regardless of where they bank in the U.S., can appear in Zelle<sup>®</sup> ready contacts."
  },
  {
    title:
      "You must use online banking to change recurring Zelle<sup>®</sup> payments.​",
    alternatives: ["True", "False"],
    correctAnswer: 1,
    overlay:
      "You can change, edit and cancel recurring payments using online banking and the mobile app. Recurring payments are a hassle-free way to pay for babysitters or dog sitters, parents who need to regularly send their kids money and more."
  },
  {
    title: "Emojis, eCards and QR codes are all features of Zelle<sup>®</sup>.",
    alternatives: ["True", "False"],
    correctAnswer: 0,
    overlay: " Zelle<sup>®</sup> offers many ways to personalize transactions."
  },
  {
    title:
      "To initiate send a penny with Zelle<sup>®</sup>, you need to click Select a Customer Action in the Customer Profile in CEI.",
    alternatives: ["True", "False"],
    correctAnswer: 0,
    overlay:
      "Customer consent is required before initiating Send a penny with Zelle<sup>®</sup>."
  }
];
	
	
	
	


  //== functions ===================================

  



  //random number function
  function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  //text field


  //spin teh wheel
  _arrow.addEventListener("click", spin);

  function spin(evt) {
    //Clear question
    _textGuess.style.display = "none";

    //remove click event
    _arrow.removeEventListener("click", spin);

    //aniamtion arrow
    _arrow.classList.add("arrowanimation");

    //new position wheel
    _deg = _deg + 180 + (15 * random(0, 24));

    //give wheel position
    _wheel.style.transform = "rotate(" + _deg + "deg)";

    //chec position
    var _position = _deg % 360;
    console.log(_position + " position");

    if (_position == 7.5) {
      _score = _score + 800;
      _jackpot = _jackpot + 800;
    }
    if (_position == 22.5) {
      _score = _score + 700;
      _jackpot = _jackpot + 700;
    }
    if (_position == 37.5) {
      _score = _score + 500;
      _jackpot = _jackpot + 500;
    }
    if (_position == 52.5) {
      _score = _score + 200;
      _jackpot = _jackpot + 200;
    }
    if (_position == 67.5) {
      _score = _score + 100;
      _jackpot = _jackpot + 100;
    }
    if (_position == 82.5) {
      _score = _score + 200;
      _jackpot = _jackpot + 200;
    }
    if (_position == 97.5) {
      _score = _score + 300;
      _jackpot = _jackpot + 300;
    }
    if (_position == 112.5) {
      _score = _score + 400;
      _jackpot = _jackpot + 400;
    }
    if (_position == 127.5) {
      _score = _score + 100;
      _jackpot = _jackpot + 100;
    }
    if (_position == 142.5) {
      _score = _score + 600;
      _jackpot = _jackpot + 600;
    }
    if (_position == 157.5) {
      _score = _score + 700;
      _jackpot = _jackpot + 700;
    }
    if (_position == 172.5) {
      _score = _score + 800;
      _jackpot = _jackpot + 800;
    }
    if (_position == 187.5) {
      //bank
      _jackpot = _jackpot + _score;
      _score = 0;
    }
    if (_position == 202.5) {
      _score = _score + 800;
      _jackpot = _jackpot + 800;
    }
    if (_position == 217.5) {
      _score = _score + 700;
      _jackpot = _jackpot + 700;
    }
    if (_position == 232.5) {
      _score = _score + 600;
      _jackpot = _jackpot + 600;
    }
    if (_position == 247.5) {
      _score = _score + 500;
      _jackpot = _jackpot + 500;
    }
    if (_position == 262.5) {
      _score = _score + 400;
      _jackpot = _jackpot + 400;
    }
    if (_position == 277.5) {
      _score = _score + 300;
      _jackpot = _jackpot + 300;
    }
    if (_position == 292.5) {
      _score = _score + 200;
      _jackpot = _jackpot + 200;
    }
    if (_position == 307.5) {
      _score = _score + 100;
      _jackpot = _jackpot + 100;
    }
    if (_position == 322.5) {
      //bank
      _jackpot = _jackpot + _score;
      _score = 0;
    }
    if (_position == 337.5) {
      //jackpot
      _score = _score + _jackpot;
      _jackpot = 0;
    }
    if (_position == 352.5) {
      //bank
      _jackpot = _jackpot + _score;
      _score = 0;
    }

    //after spin
    setTimeout(function () {
      //Select random question
      //			const displayQ = document.querySelector('#display-questions').innerText = getQuestion();
      //			console.log(displayQ);
      _textGuess.style.display = "block";
     
		
		
//      //Guess 1
		
		function guessText1() {
  let inputValue = document.getElementById("domTextElement").value;
  console.log("inputValue");
}
//      const guessText1 = () => {
//        let inputValue = document.getElementById("domTextElement").value;
////        document.getElementById("valueInput").innerHTML = inputValue; 
//console.log("inputValue");

//        if (inputValue == "Correct Answer") {
//          console.log("Good Guess");
//        } else {
//          console.log("bad Guess");
//        }
//      }

      //make clickebel again
      _arrow.addEventListener("click", spin);
      //remove arrow animation
      _arrow.classList.remove("arrowanimation");
      //update score and jackpot
      _scoreDisp.innerHTML = "Score = $" + _score;
      _jackpotDisp.innerHTML = "Jackpot = $" + _jackpot;
    }, 5000);

  }
}


window.onload = function () {
  main();
}
