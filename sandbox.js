// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invoices = [];
// const invOne = new Invoice("Yoshi", "plumbing", 250);
// console.log(invOne.format());
// Dealing with forms and inputs with TypeScript
var form = document.querySelector(".new-item-form");
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
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
