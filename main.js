const account={
    account_name:"Vimala",
    balance_amount:100,

    getBalance:function(){
        alert("Your current Balance is $:" + this.balance_amount)
        
    },
    deposit:function(amount){
        if(isNaN(amount) || amount <= 0){
            alert("Invalid deposit amount");
            return;
        }
        this.balance_amount+=amount;
        alert("Deposit successful.Your New balance is $:"+ this.balance_amount);
    },
    withdrawal:function(amount){
        if(isNaN(amount) || amount <= 0 || amount > this.balance_amount){
            alert("Invalid withdrawal amount or insufficient balance");
            return;
        }
        this.balance_amount-=amount;
        alert("Withdrawal successful. Your new balance is $:" + this.balance_amount);
    },
    getAccountName:function() {
        alert("Your account name is: " + this.account_name);
    }

};


function atm(){
    const message= parseInt(
        prompt(
            "Select a choice:\n1) See Balance\n2) Make a Deposit\n3) Make a Withdrawl\n4) Get Account Name \n5) Exit "
            )
        );
        if (isNaN(message)) {
            alert("Invalid input. Please enter a valid number.");
            return atm(); 
        }
           
        switch (message) 
    {
        case 1:
            account.getBalance();
            atm();
            break;
        case 2:
            const deposit_Amount = parseFloat(prompt("Enter the amount to deposit:"));
            account.deposit(deposit_Amount);
            atm();
            break;
        case 3:
            const withdraw_Amount = parseFloat(prompt("Enter the amount to withdraw:"));
            account.withdrawal(withdraw_Amount);
            atm();
            break;
        case 4:
            account.getAccountName();
            atm();
            break;
        case 5:
            alert("Exiting ATM...");
            break;  
        default:
            alert("Invalid option");
            atm();
            break;
    }

}
atm();