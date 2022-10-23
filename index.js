"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var ATM = /** @class */ (function () {
    function ATM(username, userid, pin, balance) {
        this._balance = balance;
        this._pin = pin;
        this._userid = userid;
        this._username = username;
    }
    ATM.prototype.getBalance = function () {
        return this._balance;
    };
    ATM.prototype.setBalance = function (v) {
        this._balance = v;
    };
    ATM.prototype.getPin = function () {
        return this._pin;
    };
    ATM.prototype.setPin = function (v) {
        this._pin = v;
    };
    ATM.prototype.getUserName = function () {
        return this._username;
    };
    ATM.prototype.setUserName = function (v) {
        this._username = v;
    };
    ATM.prototype.getUserId = function () {
        return this._userid;
    };
    ATM.prototype.setUserId = function (v) {
        this._userid = v;
    };
    ATM.prototype.Deposit = function (atm, v) {
        if (v > 0) {
            this._balance = this._balance + v;
            console.log("\nYou have made a deposit of ".concat(v));
            this.CheckBalance();
        }
    };
    ATM.prototype.Withdraw = function (atm, v) {
        if (this.getBalance() >= v && v > 0) {
            this._balance = this._balance - v;
            console.log("\nYou have Withdraw ".concat(v, " from your account."));
            this.CheckBalance();
        }
        else {
            console.log("\nSorry, you don't have that amount :(");
        }
    };
    ATM.prototype.CheckBalance = function () {
        console.log("\nHi ".concat(this._username, ", your Current Balance is ").concat(this._balance));
    };
    ATM.prototype.Info = function () {
        console.log("\nUser Name : ".concat(this._username, "\nUserId : ").concat(this._userid, "\nPIN : ").concat(this._pin, "\nBalance : ").concat(this._balance));
    };
    ATM.prototype.options = function () {
        console.log("\n\nWelcome ".concat(this._username, ", Please Choose below options."));
        console.log("1 : User Information...");
        console.log("2 : Check Balance...");
        console.log("3 : Deposit...");
        console.log("4 : Withdraw...");
        console.log("5 : Exit...\n***********END***********\n\n");
    };
    return ATM;
}());
function main() {
    var customers = [
        { UserName: "Haris Rehman", UserId: "haris155", Pin: 7860, Balance: 20000 },
        { UserName: "Ammad Raza", UserId: "ammad111", Pin: 1234, Balance: 50000 },
        { UserName: "Ali Raza", UserId: "ali111", Pin: 1111, Balance: 54000 },
        { UserName: "Ahmad Khan", UserId: "ahmad321", Pin: 3211, Balance: 67000 },
    ];
    var successFlag = false;
    var UserObj;
    console.log("\n|===================================|");
    console.log("|\t\t\t\t    |\n|**** Welcome to Typescript ATM ****|\n|\t\t\t\t    |");
    console.log("|===================================|\n");
    var _loop_1 = function () {
        var userid = (0, readline_sync_1.question)("Enter UserId: ");
        UserObj = customers.find(function (x) { return x.UserId === userid; });
        var uesridExist = customers.find(function (x) { return x.UserId === userid; }) != undefined ? true : false;
        if (uesridExist) {
            var countPin = 1;
            var _loop_2 = function () {
                var pin = Number((0, readline_sync_1.question)("Enter PIN: "));
                var IsCorrectPin = customers.find(function (x) { return x.Pin === pin; }) != undefined ? true : false;
                if (countPin === 3) {
                    return "break";
                }
                if (IsCorrectPin) {
                    successFlag = true;
                    return "break";
                }
                else {
                    console.log("You have ".concat(3 - countPin, " tries left"));
                    countPin += 1;
                }
            };
            while (countPin < 3) {
                var state_2 = _loop_2();
                if (state_2 === "break")
                    break;
            }
        }
        if (successFlag === true) {
            return "break";
        }
    };
    while (true) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    var obj = new ATM(UserObj.UserName, UserObj.UserId, UserObj.Pin, UserObj.Balance);
    var endFlag = true;
    while (endFlag) {
        obj.options();
        var userOpt = (0, readline_sync_1.question)("Kindly select an option...");
        switch (userOpt) {
            case '1':
                obj.Info();
                break;
            case '2':
                obj.CheckBalance();
                break;
            case '3':
                var depositAmoutn = Number((0, readline_sync_1.question)("How much money you want to deposit... : "));
                obj.Deposit(obj, depositAmoutn);
                break;
            case '4':
                var withdrawAmoutn = Number((0, readline_sync_1.question)("How much money you want to Withdraw... : "));
                obj.Withdraw(obj, withdrawAmoutn);
                break;
            case '5':
                endFlag = false;
                break;
        }
    }
}
main();
