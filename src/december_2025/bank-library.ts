import { v4 as uuidv4 } from 'uuid';

export enum AccountType {
    SAVINGS,
    CHEQUING
}

export class Bank {
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
    
    findCustomerId(customerId: string) {
        const customer = this.arrayOfCustomers.find(cust => cust.customerId == customerId);
        return customer;
    }
    
    findCustomerByName(username: string): Customer | undefined {
        return this.arrayOfCustomers.find((customer) => customer.name = username)
    }

    findAccount(accountId: string): Account | undefined {
        let customerAccount: Account | undefined;

        const receiverCustomer = this.arrayOfCustomers.find((customer: Customer) => {
            const account = customer.arrayOfAccounts.find((account)=> account.accountId == accountId);
            if(account != undefined) {
                customerAccount = account;
            }
            return account != undefined;
        });
        return customerAccount;
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

    transfer(amount: number, senderAccountId: string, recieversAccountId: string): boolean {
        if(amount > 0) {

            const senderAccount = this.findAccount(senderAccountId);

            // Check if sender has enough balance
            if(senderAccount != undefined && amount > senderAccount.balance) {
                console.log(`Request transfer amount (${amount}). Insufficient balance ${senderAccount.balance} in account ${senderAccount.accountId}.`);
                return false;
            }
            
            const receiverAccount = this.findAccount(recieversAccountId);
    
            if(senderAccount != undefined && receiverAccount != undefined) {
                if(receiverAccount) {
                    // Increase balance of receiver
                    receiverAccount.balance = receiverAccount?.balance + amount;
                    
                    // Decrease balance of sender
                    senderAccount.balance = senderAccount.balance - amount;
                }
                console.log(`Transfer from account ${senderAccount.accountId} to account ${receiverAccount?.accountId} is successful`);
                return true;
            }
        }
        console.log(`Transfer from account ${senderAccountId} is unsuccessful`);
        return false;
    }    
}

export class Customer {
    customerId: string;
    name!: string;
    password!:string;
    arrayOfAccounts: Array<Account> = [];
    
    constructor(name: string, password: string) {
        this.customerId = uuidv4();
        this.name = name;
        this.password = password;
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

export class Account {
    balance: number = 0;
    accountId!: string;
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
    
    
}
