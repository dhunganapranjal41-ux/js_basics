class BankAccount {
    constructor(accountName, initialAmount) {
        this.accountName = accountName;
        this.balance = initialAmount;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: Rs.${amount}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
            return;
        }

        this.balance -= amount;
        console.log(`Withdrawn: Rs.${amount}`);
    }

    balanceInquiry() {
        console.log(`Current Balance: Rs.${this.balance}`);
    }

    accountDetails() {
        console.log("----- Account Details -----");
        console.log(`Account Name: ${this.accountName}`);
        console.log(`Balance: Rs.${this.balance}`);
    }
}

// Create Account
const account = new BankAccount("Pranjal", 10000);

account.accountDetails();

account.deposit(5000);

account.withdraw(2000);

account.balanceInquiry();

account.accountDetails();
