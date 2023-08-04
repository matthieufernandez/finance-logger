// classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes \$${this.amount} for ${this.details}`;
    }
}

let invoices: Invoice[] = [];

// const invOne = new Invoice("Yoshi", "plumbing", 250);

// console.log(invOne.format());

// Dealing with forms and inputs with TypeScript
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);

    console.log(invoice.format());
})



















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