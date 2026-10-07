/*
LLD Exercise #1 — Food Ordering System
Tum ek food-delivery backend ka Order module build kar rahe ho.
V1 Requirements
User restaurant se food order kar sakta hai.
Abhi system bahut simple hai:
1. Ek order mein multiple food items ho sakte hain.
2. Har item ke paas name, price, aur quantity hogi.
3. Order ko total amount calculate karna hai.
4. फिलहाल payment sirf Cash on Delivery (COD) hai.
5. Successful order ke baad user ko ek Email confirmation bhejna hai.
6. Order ka initial status "PLACED" hoga.

*/
// interface OrderItem {
//     name: string;
//     price: number;
//     quantity: number;
// }

// const orders: OrderItem[] = [
//     {
//      name: "Pizza",
//      price: 12.99,
//     quantity: 2
//     },
//     {
//         name: "Burger",
//         price: 8.99,
//         quantity: 1
//     },
//     {
//         name: "Salad",
//         price: 7.99,
//         quantity: 1
//     }
// ]


// const  calculateTotalAmount = orders.reduce((total, order) => total + (order.price * order.quantity), 0);
// const card="1233434-1234-1234-1234";
// const upi="1234@upi";
// let status= "PLACED";

// function stripeCardPayment(paymentInfo?: string): string | undefined {
//     if(paymentInfo){
//         return `Payment processed successfully with card info: ${paymentInfo}`;
//     }
// }

// function UpiPayment(paymentInfo?: string): string | undefined {
//     if(paymentInfo){
//         return `Payment processed successfully with UPI info: ${paymentInfo}`;
//     }
// }

// function PaymentType(type: string, amount: number, paymentInfo?: string): string | undefined {
//     if(type === "CASH"){
//         return `Payment type is CASH and total amount is ${amount}`;
//     }
//      else if(type === "CARD"){
//          const processedCard = stripeCardPayment(paymentInfo);

//         return `Payment type is CARD and total amount is ${amount} and paymement info is ${processedCard}`;
//      } else if(type === "UPI"){
//         const processedUpi = UpiPayment(paymentInfo);
//         return `Payment type is UPI and total amount is ${amount} and payment info is ${processedUpi}`;
//      }
// }

// const paymentType = PaymentType("CASH",calculateTotalAmount);
// const cardPaymentType = PaymentType("CARD",calculateTotalAmount,card);
// const upiPaymentType = PaymentType("UPI",calculateTotalAmount,upi);


// function successfulOrderEmail(): string {
//     return "Your order has been placed successfully!";
// }




interface OrderItem {
    name: string;
    price: number;
    quantity: number;
}

const orders: OrderItem[] = [
    {
        name: "Pizza",
        price: 12.99,
        quantity: 2
    },
    {
        name: "Burger",
        price: 8.99,
        quantity: 1
    },
    {
        name: "Salad",
        price: 7.99,
        quantity: 1
    }
];

const totalAmount = orders.reduce(
    (total, order) =>
        total + order.price * order.quantity,
    0
);




interface Payment {
    pay(amount: number, paymentInfo?: string): string;
}




class CardPayment implements Payment {

    pay(amount: number, paymentInfo?: string): string {

        return `Card payment of ${amount} processed using ${paymentInfo}`;
    }
}


class UpiPayment implements Payment {

    pay(amount: number, paymentInfo?: string): string {

        return `UPI payment of ${amount} processed using ${paymentInfo}`;
    }
}


class CashPayment implements Payment {

    pay(amount: number): string {

        return `Cash on Delivery selected. Amount: ${amount}`;
    }
}



class PaymentFactory {

    static create(type: string): Payment {

        if (type === "CARD") {
            return new CardPayment();
        }

        if (type === "UPI") {
            return new UpiPayment();
        }

        if (type === "CASH") {
            return new CashPayment();
        }

        throw new Error("Invalid payment type");
    }
}




const payment = PaymentFactory.create("UPI");

const result = payment.pay(
    totalAmount,
    "1234@upi"
);

console.log(result);


function successfulOrderEmail(): string {
    return "Your order has been placed successfully!";
}
