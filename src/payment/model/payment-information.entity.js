export class PaymentInformation {
    constructor(name, cardNumber, expirationDate, cvv, email) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
        this.email = email;
    }
}