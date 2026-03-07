import { AccountType, Bank, Customer } from "./bank-library";

let prompts = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit;

// Create customers
let customer1: Customer = new Customer('Soham Shinde', 'test');
let customer2: Customer = new Customer('Deepa Garad', 'test');
let customer3: Customer = new Customer('Suryakand Shinde', 'test');

// Create Bank with 3 customers
let bankObject: Bank = new Bank([customer1, customer2, customer3]);
bankObject.arrayOfCustomers.forEach((customer) => customer.printAllAccountDetails());


let actionPrompt: string = '';

let customerId = prompts("Welcome to Bank, please enter your customer ID: ");
let customer: Customer | undefined = bankObject.findCustomerId(customerId);

while (actionPrompt != '6') {
    if(customer != undefined) {
        if(customer.arrayOfAccounts.length == 0) {
            console.error("You have no accounts. Open an account first.");
        } else {
            customer.printAllAccountDetails();
        }
        
        // Do what customer is asking to do
        console.log(`\n Option [1]: Withdraw \n Option [2]: Deposit \n Option [3]: Transfer \n Option [4]: Open Account \n Option [5]: Change Customer \n Option [6]: Exit \n`);
        actionPrompt = prompts(`Hello, ${customer.name}. What would you like to do today?`);
        
        switch (actionPrompt) {
            case '1': // Withdraw
                let accountPromptWithdraw: AccountType = prompts('Which account would you like to withdraw amount from?');
                
                let accountIndexWithdraw: number = 0;
                for(let i = 0; i < customer.arrayOfAccounts.length; i++) {
                    if(customer.arrayOfAccounts[i].typeOfAccount == accountPromptWithdraw) {
                        accountIndexWithdraw = i;
                        break;
                    }
                }
                let amountWithdraw: number = prompts(`How much money would you like to withdraw from your ${customer.arrayOfAccounts[accountIndexWithdraw].typeOfAccount}? `);
                customer.arrayOfAccounts[accountIndexWithdraw].withdraw(amountWithdraw);
                break; 
            case '2': // Deposit
                let accountPromptDeposit: AccountType = prompts('Which account would you like to deposit cash to?');
                let accountIndexDeposit: number = 0
                for(let i = 0; i < customer.arrayOfAccounts.length; i++) {
                    if(customer.arrayOfAccounts[i].typeOfAccount == accountPromptDeposit) {
                        accountIndexDeposit = i;
                        break;
                    }
                }
                
                let amountDeposit: string = prompts(`How much money do you want to deposit to your ${customer.arrayOfAccounts[accountIndexDeposit].typeOfAccount}? `);
                customer.arrayOfAccounts[accountIndexDeposit].deposit(Number.parseInt(amountDeposit));
                break;
            case '3': // Transfer
                let accountPromptTransfer: AccountType = prompts('Which account would you like to transfer money FROM?');
                let accountIndexTransfer: number = 0
                for(let i = 0; i < customer.arrayOfAccounts.length; i++) {
                    if(customer.arrayOfAccounts[i].typeOfAccount == accountPromptTransfer) {
                        accountIndexTransfer = i;
                        break;
                    }
                }
                const senderAccount = customer.arrayOfAccounts[accountIndexTransfer];

                if(senderAccount != undefined) {
                    let recieversAccountIdTransfer: string = prompts(`Which account would you like to transfer money TO? Enter Accoount Id: `);
                    let amountTransfer: string = prompts('How much money would you like to transfer to the reciever?');
                    
                    bankObject.transfer(Number.parseInt(amountTransfer), senderAccount.accountId, recieversAccountIdTransfer);
                }
                break;
            case '4': // Open Account
                let typeOfAccount: AccountType = prompts(`What account type you want to open (CHEQUING, SAVINGS)?`);
                bankObject.openAccount(customer.customerId, typeOfAccount);
                customer.printAllAccountDetails();
                break;
            case '5': // Exit
                customerId = prompts("Welcome to Bank, please enter your customer ID: ");
                customer = bankObject.findCustomerId(customerId);
                break;                           
            case '6': // Exit
                console.log(`Thank you for banking with us!`)
                break;
            default:
                console.log("Pick a valid option between 1, 2, 3 or 4.")
        }           
    } else {
        console.log('No account found');
    }
    
} 
