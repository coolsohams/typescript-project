
import { getElementById, getInputValue } from '../web-utilities/utilities';
import { Bank, Customer } from './bank-library';

const soham: Customer = new Customer('soham', 'test');
const surya: Customer = new Customer('surya', 'test');
const bank: Bank = new Bank([soham, surya]);

export function login() {
    const username = getInputValue('customerId');
    const password = getInputValue('password');

    const cust = bank.findCustomerByName(username);
    if(cust && cust.password == password) {
        alert('Login Success');    
    } else {
        alert('Invalid username/password');    
    }
}

const button = getElementById('loginButton');
if(button) {
    button.addEventListener("click", login);
}


