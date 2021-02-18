// generate  pin:

let generatePin = () => {
    let pin = Math.round(Math.random() * 100000)+'';
 	if (pin.length < 5) {
		generatePin();
    } else {
        	document.getElementById("displayPin").style.backgroundColor =
			" #3D4153";
		document.getElementById("displayPin").value = pin;
	}
};

// Press number:
document
	.getElementById("number-buttons")
	.addEventListener("click", function (event) {
        
        // display color:
		document.getElementById("numberDisplay").style.backgroundColor =
			" #3D4153";

        // pinDisplay value:
		let pinDisplay = document.getElementById("displayPin").value;

        // check PinDisplay:
		if (pinDisplay == "") {
			document.getElementById("numberDisplay").value = "";
		}
        
        else {
			let number = event.target.innerText;
// submit button:
            if (number == "Submit") {
                // call checkPin function:
				checkPin();
            }
            // Back button:
            else if (number == "Back") {
				let split = document.getElementById("numberDisplay")
					.value;
				document.getElementById(
					"numberDisplay"
				).value = split.slice(0, -1);
            }
            // C button:
            else if (number == "C") {
				document.getElementById("numberDisplay").value = "";
            }
            // other number button:
            else {
                
                if (number.length == 1) {
                    				document.getElementById(
							"numberDisplay"
						).value += number;
                } 


			}
		}
	});



    
// Check pin :
let checkPin = () => {
    // Pin and number display:
	const pin = parseInt(document.getElementById("displayPin").value);
	const number = parseInt(document.getElementById("numberDisplay").value);

    // Count for wrong:
	let count = document.getElementById("count-wrong").innerText;
// if match:
	if (pin == number) {
		document.getElementById("notify-right").style.display = "block";
        document.getElementById("notify-wrong").style.display = "none";
        
        // right sound:
        		document.getElementById(
				"notify-audio"
			).innerHTML = `<audio id="wrong-sound" controls autoplay>
                     <source src="letsGo.mp3" type="audio/mpeg">
                     
                </audio>`;
    }
    // if wrong:
    else {
		document.getElementById("notify-wrong").style.display = "block";
        document.getElementById("notify-right").style.display = "none";
        
        // red color for wrong:
		document.getElementById("numberDisplay").style.backgroundColor =
			"red";

        // wrong sound:
		document.getElementById(
			"notify-audio"
		).innerHTML = `<audio id="wrong-sound" controls autoplay>
                     <source src="wrong.mp3" type="audio/mpeg">
                     
                </audio>`;
        
        // wrong count:
		if (count == "5") {
			document.getElementById("wrong-msg").style.display =
				"block";
			document.getElementById("notify-audio").innerHTML = ``;
		} else {
			count = +count + 1;
			document.getElementById("count-wrong").innerText = count;
		}
	}
};
