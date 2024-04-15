window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() 
{
    const amount = document.getElementById("loan-amount");
    const years = document.getElementById("loan-years");
    const rate = document.getElementById("loan-rate");

    const defaultbalues = {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    };

    const monthlyPayment = calculateMonthlyPayment(defaultbalues);
}

// Get the current values from the UI
// Update the monthly payment
function update() 
{
  let values = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) 
{
  const monthlyPayment = (values.amount * values.rate /12) / (1 - Math.pow(1 + (values.rate /12), -(values.years*12)));
  const formattedNumber = new Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(monthlyPayment); 
  return formattedNumber;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) 
{
  let monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = monthly;
}
