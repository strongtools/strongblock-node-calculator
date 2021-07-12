
// const calculator = (current, wanted) => {
//     let days = 0;
//     for(let i=current; i<wanted; i++) {
//         days += 10/(i*0.0924)
//     }
//     console.log(days.toFixed(2))
// }
// calculator(1,5)


// let formCollector = document.getElementById("form-collector")


// formCollector.addEventListener("submit", submitForm)

// function submitForm(event) {
//     event.preventDefault();
//     let newForm = new FormData(event.target)
//     let firstName = newForm.get("first-name")
//     console.log(firstName)
    
// }

let button = document.getElementById("btn")
let currentArea = document.getElementById("current-area")
let wantedArea = document.getElementById("wanted-area")
let displayArea = document.getElementById("display-area")

button.addEventListener("click", calculate)

function calculate() {
    let current = parseInt(currentArea.value) //treats the input as a number
    let wanted = parseInt(wantedArea.value)
    let days = 0;
        for(let i=current; i<wanted; i++) {
        let math = (days += 10/(i*0.0924))        
        // displayArea.innerHTML=`it will take you ${math.toFixed(2)} number of days`
        let newContent = `<p>It will take you: <span class="span-color">${math.toFixed(2)}</span> days.</p>`
        displayArea.innerHTML = newContent
    }
    console.log(days.toFixed(2))
    if (current>wanted) {
        displayArea.innerHTML="Current value must be higher than wanted value. Please try again."
    } else if (current===0) {
        displayArea.innerHTML="Current value cannot be equal to zero. Please try again."
    } else if (current===wanted) {
        displayArea.innerHTML = "Current value cannot be equal to wanted value. Please try again."
    }

}

