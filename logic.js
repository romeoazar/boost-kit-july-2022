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
      "From the account dashboard in the U.S. Bank Mobile App, what do you tap to access the personal loan calculator?",
    alternatives: ["Explore & apply", "Help & services", "Manage cards"],
    correctAnswer: 0,
  },
  {
    title:
      "After entering required details in the Check your Rate tool, the customer receives only two rate and terms options.",
    alternatives: ["True", "False"],
    correctAnswer: 1,
  },
  {
    title:
      "How many applicants can apply for a personal loan using our secure online application process?",
    alternatives: ["One applicant", "One primary applicant and one joint applicant", "Three applicants"],
    correctAnswer: 0,
  },
  {
    title:
      "Which of the following scenarios would be a great fit for a personal loan?",
    alternatives: ["Debt consolidation ", "Boats, older cars and new appliances", "All of the above"],
    correctAnswer: 2,
  },
  {
    title:
      "You can use a personal loan to consolidate debt, fund a major purchase, renovate your home or pay off your bills.",
    alternatives: ["True", "False"],
    correctAnswer: 0,
  },
  {
    title:
      "What digital tool can you use to help a customer apply for a personal loan?",
    alternatives: ["Copilot", "Cobrowse", "Conavigate"],
    correctAnswer: 0,
  },
  {
    title:
      "An email address is required to use the Check your Rate tool.",
    alternatives: ["True", "False"],
    correctAnswer: 1,
  },
  {
    title:
      "You can check your credit score using Smart Assistant, by saying “Check my credit score.”",
    alternatives: ["True", "False"],
    correctAnswer: 0,
  },
  {
    title: "You can calculate home project costs for personal loans & lines in Explore accounts & offers.",
    alternatives: ["True", "False"],
    correctAnswer: 0,
  },
  {
    title:
      "What’s the fastest a personal loan can be approved using mobile or online banking?",
    alternatives: ["1-2 business days", "Within minutes", "Within 24 hours"],
    correctAnswer: 1,
  },
	 {
    title:
      "What are the three options in the Check your Rate tool to understand how the customer will use the loan?",
    alternatives: ["Auto purchase, Debt consolidation and Vacation purchase. ", "Starbucks, house cleaner and Twins baseball game", "Auto purchase, Debt consolidation, Home improvements or Other"],
    correctAnswer: 2,
  },
		 {
    title:
      "In most cases, you’ll need a FICO credit score of ____ or above to qualify for a personal loan.",
    alternatives: ["660 or above", "Credit score doesn’t matter", "760 or above"],
    correctAnswer: 0,
  },
			 {
    title:
      "You can use Smart Assistant to get to the Explore products & offers landing page in the mobile app.",
    alternatives: ["True", "False. That’s not a capability yet, but you can ask Smart Assistant to take you to personal loan products and answer ‘Yes’ to an additional prompt to be taken to the Explore products page."],
    correctAnswer: 1,
  },
				 {
    title:
      "How many products do we offer under personal Loans & credit lines?",
    alternatives: ["8", "4","2"],
    correctAnswer: 1,
  },
					 {
    title:
      "Customers can borrow up to $50,000 with a U.S. Bank Home Improvement Personal Loan.",
    alternatives: ["True", "False"],
    correctAnswer: 1,
  },
						 {
    title:
      "Checking your credit score in the U.S. Bank Mobile App or online banking does NOT affect your score.",
    alternatives: ["True.You can monitor your credit score as closely as you like without taking a “hit” to your credit.", "False"],
    correctAnswer: 0,
  }
];
	


  //== functions ===================================
	
	let app = {
  start: function () {
    this.currPosition = 0;
    this.score = 0;
    this.priceList = document.querySelector("#prices");

    //Hide intro show quiz
    document.querySelector("#quiz").style.display = "inline-flex";

    // Grab List to create one event listener
    let list = document.querySelector("#ques-list");
    list.addEventListener("click", (e) => {
      if (e.target === list) {
        return;
      }
      //Create array from children
      let children = list.children;
      let index = Array.from(children).indexOf(e.target);
      //Check for correct answer
      this.checkAnswer(index);
    });

    // refresh stats
    this.updateStats();

    // show first question
    this.showQuestion(questions[this.currPosition]);
    this.updatePrice(this.currPosition, "active");

    let closeBtn = document.querySelector(".close-btn");
    closeBtn.onclick = () => {
      this.closeModal();
    };
  },
  end: function () {
    //Hide quiz show end screen
    let id = "";
    if (this.score <= 4) {
      id = "#end1";
    } else if (this.score >= 5 && this.score <= 9) {
      id = "#end2";
    } else {
      id = "#end3";
    }
    document.querySelector("#quiz").style.display = "none";
    const finalscore = document.querySelector(id);
    finalscore.querySelector(".score").innerHTML = this.score;
    finalscore.style.display = "inline-block";
    console.log(this.score);
  },

  showQuestion: function (q) {
    // show question title
    let titleDiv = document.getElementById("title");
    titleDiv.innerHTML = q.title;
    let overDiv = document.getElementById("overlay");
    overDiv.innerHTML = q.overlay;

    let btnText = "Next Question";
    if (this.currPosition == questions.length) {
      btnText = "Finish Game";
    }
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.innerHTML = btnText;

    // show alternatives

    let list = document.querySelector("#ques-list");
    list.innerHTML = "";
    q.alternatives.forEach((a) => {
      let html = `<li class="alternative">${a}</li>`;
      list.insertAdjacentHTML("beforeend", html);
    });
  },

  updatePrice: function (index, className) {
    this.priceList.children[index].classList.add(className);
  },

  // Check Answer

  checkAnswer: function (userSelected) {
    let currQuestion = questions[this.currPosition];

    if (currQuestion.correctAnswer == userSelected) {
      // correct
      this.score++;
      this.showResult(true);
      this.updatePrice(this.currPosition, "correct");
    } else {
      // not correct
      this.updatePrice(this.currPosition, "incorrect");
      this.showResult(false);
    }
    this.openModal();
  },

  nextQuestion: function () {
    // refresh stats
    this.updateStats();

    // increase position
    this.increasePosition();

    // show next question
    // this.querySelector(".popup").style.display = "block";
    this.showQuestion(questions[this.currPosition]);
    this.updatePrice(this.currPosition, "active");
  },

  increasePosition: function () {
    this.currPosition++;

    if (this.currPosition == questions.length) {
      this.end();
      this.currPosition = 0;
    }
  },

  updateStats: function () {
    let scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `You have: ${this.score} pennies`;
  },

  showResult: function (isCorrect) {
    let resultDiv = document.getElementById("result");
    let result = "";

    // checks
    if (isCorrect) {
      result = "Correct Answer!";
    } else {
      // get the current question
      let currQuestion = questions[this.currPosition];

      // get correct answer (index)
      let correctAnswIndex = currQuestion.correctAnswer;

      // get correct answer (text)
      let correctAnswText = currQuestion.alternatives[correctAnswIndex];

      result = `Wrong! Correct answer: ${correctAnswText}`;
    }

    resultDiv.textContent = result;
  },
  openModal: function () {
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
  },
  closeModal: function () {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
    this.nextQuestion();
  }
};

  



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
	app.start();
     
		
		


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
