
let loanForm = document.getElementById('form');

let customersEmail = document.getElementById('email');
let customersContact = document.getElementById('contact');
let customersAddress = document.getElementById('address');


function calculatePoint() {
    //variable declearation and assignment

    let accountBalance = document.getElementById('accountBalance').value;
    let loanAmount = document.getElementById('loanAmount').value;
    let creditHistory = parseInt(document.getElementById('creditHistory').value);
    let LastDepositDate = parseInt(document.getElementById('LastDepositDate').value);
    let CollectionDate = parseInt(document.getElementById('LastLoanCollectionDate').value);
    let LoanRepaymentPeriod = parseInt(document.getElementById('LoanRepaymentPeriod').value);
    let accountType = parseInt(document.getElementById('accountType').value);
    let customersName = document.getElementById('fullName').value;

    // initial point
    let point = 0;

    // point accumulation

    if (accountBalance >= loanAmount){
        point += 10;
    }else{
      point -=10;
    }

    point += creditHistory;


    point += LastDepositDate;


    point += CollectionDate;


    point += LoanRepaymentPeriod;


    point += accountType;

    

   

     

    // Sum of the points Output
    
    // let result = document.getElementById('feedBack')
    let result = document.getElementById('result')
    if (point >= 30) {

      result.innerHTML = `Congratulations! ${customersName}, your Loan Application Has been Approved and you earned ${point} Point.`;
       result.style.color = "Green"
       result.style.marginTop = "230px";
       result.style.textAlign = "center";
       result.style.fontSize = "35px";

      //  result.style.flex = "1";
      //  result.style.justifyContent = "center";
      //  result.style.alignItems = "center";

    } else { 
      result.innerHTML = `We are sorry ${customersName}, your Loan Application was declined because you earned ${point} Point which is below our loan approval threshhold.`;
      result.style.color = "Red"
      result.style.marginTop = "180px";
      result.style.textAlign = "center";
      result.style.fontSize = "35px";
   
       
    }
    // document.getElementById('loanForm').reset();
   
}
