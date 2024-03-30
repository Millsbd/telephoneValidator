const numberInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');

const clearDiv = () => {
  resultDiv.innerHTML = "";
  numberInput.innerText = "";
}

 const num1 = /^\d{3}-\d{3}-\d{4}$/; // 555-555-5555
  const num2 = /^\(\d{3}\)\d{3}-\d{4}$/; // (555)555-5555
  const num3 = /^\(\d{3}\)\s{1}\d{3}-\d{4}$/; // (555) 555-5555
  const num4 = /^\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 555 555 5555
  const num5 = /^\d{10}$/; // 5555555555
  const num6 = /^1{1}\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 1 555 55555555
  const num7 = /^1{1}\s{1}\(\d{3}\)\s{1}\d{3}-\d{4}$/; // 1 (555)555-5555
  const num8 = /^1{1}\(\d{3}\)\d{3}-\d{4}$/; // 1(555)555-5555
  const num9 = /^1{1}\s{1}\d{3}-\d{3}-\d{4}$/; // 1 555-555-5555
  const nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9];

    const checkNumber = (val) => {
      for(let i = 0; i < nums.length; i++) {
        if (nums[i].test(val)) {
          return true;
        }
      }
      return false;
    }
    


checkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const userEntry = numberInput.value;

  if(userEntry === "") {
    alert("Please provide a phone number");
  } else if (checkNumber(userEntry)) {
    resultDiv.innerHTML = `Valid US number: ${userEntry}`
  } else {
    resultDiv.innerHTML = `Invalid US number: ${userEntry}`
  }
})

// numberInput.addEventListener('keydown', (e) => {
//   // e.preventDefault();
//   const userEntry = numberInput.value;

//   if(userEntry === "") {
//     alert("Please provide a phone number");
//   } else if (checkNumber(userEntry)) {
//     resultDiv.innerHTML = `Valid US number: ${userEntry}`
//   } else {
//     resultDiv.innerHTML = `Invalid US number: ${userEntry}`
//   }

// })

clearBtn.addEventListener('click', clearDiv);


