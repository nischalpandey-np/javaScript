// Restaurant Ordering System CLI

const prompt = require("prompt-sync")();

const menu = [
    { name: 'Burger', price: 200 },
    { name: 'Momo', price: 150 },
    { name: 'Chowmin', price: 120 },
    { name: 'Pizza', price: 300 },
    { name: 'Tea', price: 40 },
    { name: 'Coffee', price: 80 },
]


function viewMenu() {
    let i;
    console.log('Name   | Price')
    for (i = 0; i < menu.length; i++) {
        console.log(`${menu[i].name}  ${menu[i].price}`)
    }
}

let userOrder = []
let orderQty = []
function takeOrder() {
    condn = true
    while (condn) {
        let order = prompt('Enter your order: ')
        let item = menu.find(menuItem => menuItem.name.toLowerCase() === order.toLowerCase())
        if (item) {
            let qty = Number(prompt('Enter order quantity: '))
            if (isNaN(qty)){
                console.log("Please enter a valid number.")
                continue
            }
            else{
            userOrder.push(order)
            orderQty.push(qty)
            }
          

        } else {
            console.log(`Item "${order}" not found in menu.`);
            continue
        }
       
        let again = prompt("Do you want to order more ?? (y/n): ").toLowerCase()

        if (again === 'n') {
            condn = false
        }
    }


}

function editDeleteOrders() {
    console.log('\nYour orders are:');
    for (let i = 0; i < userOrder.length; i++) {
        console.log(`${i + 1}. ${userOrder[i]} (Qty: ${orderQty[i]})`);
    }
    
    let choice = prompt('Choose Edit / Delete / Continue (e/d/c): ').toLowerCase();
    
    if (choice === 'e' || choice === 'edit') {
        let editNo = Number(prompt('Please choose order number to edit: '));
        let index = editNo - 1;
        
        if (index >= 0 && index < userOrder.length) {
            let newQty = Number(prompt('Enter new quantity: '));
            if (!isNaN(newQty) && newQty > 0) {
                orderQty[index] = newQty;
                console.log(`Order updated!`);
            }
        } else {
            console.log("Invalid order number.");
        }
        
    } else if (choice === 'd' || choice === 'delete') {
        let deleteNo = Number(prompt('Please choose order number to delete: '));
        let index = deleteNo - 1;
        
        if (index >= 0 && index < userOrder.length) {
            userOrder.splice(index, 1);
            orderQty.splice(index, 1);
            console.log(`Order deleted!`);
        } else {
            console.log("Invalid order number.");
        }
    }
}

let total = 0
function calculateTotal() {
   
    for (let i = 0; i < userOrder.length; i++) {
       let item = menu.find(menuItem => menuItem.name.toLowerCase() === userOrder[i].toLowerCase());
        total += item.price * orderQty[i];

    }

}

function orderSummary() {
    console.log('Thankyou for your order.')
    console.log("Ordered Items are...")
    for (let i=0 ; i<userOrder.length ; i++){
         let item = menu.find(menuItem => menuItem.name.toLowerCase() === userOrder[i].toLowerCase());
        console.log( `${i+1}. ${userOrder[i].charAt(0).toUpperCase() + userOrder[i].slice(1)} * ${orderQty[i]} = Rs${item.price * orderQty[i]}`)
    }
    console.log('Total =Rs',total)
}

function main() {
    console.log("Welcome to CLI Restaurant Ordering System");

    viewMenu();
    takeOrder();
    editDeleteOrders();  
    calculateTotal()
    orderSummary();      

}

main();
