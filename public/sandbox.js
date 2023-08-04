import { Invoice } from './classes/Invoice.js';
let docOne;
let docTwo;
const me = {
    name: "Matt",
    age: 38,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
};
// access modifiers are only: readonly, private, and public (default)
let invoices = [];
// const invOne = new Invoice("Yoshi", "plumbing", 250);
// console.log(invOne.format());
// Dealing with forms and inputs with TypeScript
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    console.log(invoice.format());
});
// TypeCasting
// let logDetails: (obj: {name: string, age: number}) => void;
// type dog = {name: string, age: number};
// logDetails = (goodBoy: dog) => {
//     console.log(`His name is: ${goodBoy.name} and he is ${goodBoy.age} years old.`);
// }
// let Astro: dog = {
//     name: "Astro",
//     age: 5
// }
// logDetails(Astro);
