
import { v4 as uuidv4 } from 'uuid';

let prompts = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit;

enum AccountType {
    SAVINGS,
    CHEQUING
}

class Bank {
    arrayOfCustomers: Array<Customer> = [];
    
    constructor(customers: Array<Customer>) {
        this.arrayOfCustomers = customers;
    }
    
    addNewCustomer(customer: Customer) {
        this.arrayOfCustomers.push(customer);
    }
    
    removeCustomer(customerId: string) {
        this.arrayOfCustomers = this.arrayOfCustomers.filter((customerVar: Customer) => customerVar.customerId != customerId);
        console.log(`Customer ID ${customerId} has sucessfully been removed.`)
    }
    
    findCustomer(customerId: string) {
        const customer = this.arrayOfCustomers.find(cust => cust.customerId == customerId);
        return customer;
    }
    
    openAccount(customerId: string, typeOfAccount: AccountType): boolean {
        const customer = this.arrayOfCustomers.find((cust) => cust.customerId == customerId);
        
        if(customer != undefined) {
            // Found account. Continue with opening account 
            let createdAccount: Account = new Account(0, typeOfAccount);
            createdAccount.accountId = uuidv4();
            customer.arrayOfAccounts.push(createdAccount);
            console.log(`Account #${createdAccount.accountId} has been created!`);            
            return true; 
        } else {
            console.log('Customer not found');
            return false;
        }        
    }
    
}

class Customer {
    customerId: string;
    name: string = '';
    arrayOfAccounts: Array<Account> = [];
    
    constructor(name: string) {
        this.customerId = uuidv4();
        this.name = name;
    }
    
    printAllAccountDetails() {
        console.log(`Customer ID (${this.name}): ${this.customerId}`);
        
        this.arrayOfAccounts.forEach((currentAccount) => {
            console.log('=======================================');
            console.log(`Account ID: ${currentAccount.accountId}`);
            console.log(`Account Type: ${currentAccount.typeOfAccount}`)
            console.log(`Account Balance: $${currentAccount.balance}`);
        });
    }
}

class Account {
    balance: number = 0;
    accountId: string | undefined = undefined;
    typeOfAccount: AccountType = AccountType.CHEQUING;
    
    constructor(balance: number, typeOfAccount: AccountType) {
        this.balance = balance;
        this.typeOfAccount = typeOfAccount;
    }
    
    withdraw(amount: number) {
        if(this.balance == 0 || this.balance < 0) {
            console.log("Insufficient Balance!")
        } else {
            this.balance = this.balance - amount;
            console.log(`Sucessfully withdrawed $${amount}.`);
            console.log(`Current balance: $${this.balance}.`);
        }
    }
    
    deposit(amount: number) {
        if(amount > 0) {
            this.balance = this.balance + amount;
        }
    }
    
    transfer(amount: number, recieversAccountId: string): boolean {
        if(amount > 0) {

            // Check if sender has enough balance
            if(amount > this.balance) {
                console.log(`Request transfer amount (${amount}). Insufficient balance ${this.balance} in account ${this.accountId}.`);
                return false;
            }
            
            const receiverCustomer = bankObject.arrayOfCustomers.find((customer) => {
                const account = customer.arrayOfAccounts.find((account)=> account.accountId == recieversAccountId);
                return account != undefined;
            }
            );
    
            if(receiverCustomer != undefined) {
                const receiverAccount = receiverCustomer?.arrayOfAccounts.find((account)=> account.accountId == recieversAccountId);
                if(receiverAccount) {
                    // Increase balance of receiver
                    receiverAccount.balance = receiverAccount?.balance + amount;
                    
                    // Decrease balance of sender
                    this.balance = this.balance - amount;
                }
                console.log(`Transfer from account ${this.accountId} to account ${receiverAccount?.accountId} is successful`);
                return true;
            }
        }
        console.log(`Transfer from account ${this.accountId} is unsuccessful`);
        return false;
    }
}

// Create customers
let customer1: Customer = new Customer('Soham Shinde');
let customer2: Customer = new Customer('Deepa Garad');
let customer3: Customer = new Customer('Suryakand Shinde');

// Create Bank with 3 customers
let bankObject: Bank = new Bank([customer1, customer2, customer3]);
bankObject.arrayOfCustomers.forEach((customer) => customer.printAllAccountDetails());


let actionPrompt: string = '';

let customerId = prompts("Welcome to Bank, please enter your customer ID: ");
let customer: Customer | undefined = bankObject.findCustomer(customerId);

while (actionPrompt != '6') {
    if(customer != undefined) {
        if(customer.arrayOfAccounts.length == 0) {
            console.error("You have no accounts. Open an account first.");
        } else {
            customer.printAllAccountDetails();
        }
        
        // Do what customer is asking to do
        console.log(`\n Option [1]: Withdraw \n Option [2]: Deposit \n Option [3]: Transfer \n Option [4]: Open Account \n [5]: Change Customer \n Option [6]: Exit \n`);
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
                let recieversAccountIdTransfer: string = prompts(`Which account would you like to transfer money TO. Enter Accoount Id: ${customer.arrayOfAccounts[accountIndexTransfer].typeOfAccount}?`);
                let amountTransfer: string = prompts('How much money would you like to transfer to the reciever?');

                customer.arrayOfAccounts[accountIndexTransfer].transfer(Number.parseInt(amountTransfer), recieversAccountIdTransfer);
                break;
            case '4': // Open Account
                let typeOfAccount: AccountType = prompts(`What account type you want to open (CHEQUING, SAVINGS)?`);
                bankObject.openAccount(customer.customerId, typeOfAccount);
                customer.printAllAccountDetails();
                break;
            case '5': // Exit
                customerId = prompts("Welcome to Bank, please enter your customer ID: ");
                customer = bankObject.findCustomer(customerId);
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






