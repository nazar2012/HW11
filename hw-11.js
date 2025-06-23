const bankAccount = {
    ownerName: "Nazar",
    accountNumber: "12345687",
    balance: 1000,
    deposit(amount) {
        let { balance } = this;
        balance += amount;
        this.balance = balance;
        alert(`Ваш рахунок поповнено на ${amount}, загальна сума на вашому рахунку: ${balance}`);
    },
    withdraw(amount) {
        let { balance } = this;
        if (balance >= amount) {
            balance -= amount;
            this.balance = balance;
            alert(`Зняття коштів успішне. Зараз на вашому рахунку: ${balance}`);
        } else {
            alert(`Недостатньо коштів (на рахунку ${balance})! Ви хочете зняти ${amount}`);
        }
    },
};

if (confirm("Бажаєте поповнити рахунок?")) {
    const amount = parseFloat(prompt(`Введіть суму для поповнення`));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(amount);
    } else {
        alert(`Некоректно введені дані`);
    }
} else if (confirm(`Чи бажаєте ви зняти гроші?`)) {
    const amount = parseFloat(prompt(`Введіть суму для зняття`));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withdraw(amount);
    } else {
        alert(`Некоректно введені дані`);
    }
}

const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isBelowZero() {
        const { temperature } = this;
        return temperature < 0;
    }
};
const tempInput = prompt("Введіть температуру в градусах Цельсія:");
weather.temperature = parseFloat(tempInput);
const { temperature } = weather;
if (temperature < 0) {
    console.log("Температура нижче 0 градусів Цельсія");
} else {
    console.log("Температура вище або рівна 0 градусів Цельсія");
}

const user = {
    name: "Назар",
    email: "gromenkonazar@gmail.com",
    password: "123456",
    login(inputEmail, inputPassword) {
        const { email, password } = this;
        return email === inputEmail && password === inputPassword;
    }
};
const emailInput = prompt("Введіть email:");
const passwordInput = prompt("Введіть пароль:");
const { name: userName } = user;
if (user.login(emailInput, passwordInput)) {
    console.log(`Вхід успішний. Ласкаво просимо, ${userName}!`);
} else {
    console.log("Невірний email або пароль");
}

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 7,
    isHighlyRated() {
        const { rating } = this;
        return rating > 8;
    }
};
const { title, director, year, rating } = movie;
console.log("Назва:", title);
console.log("Режисер:", director);
console.log("Рік:", year);
console.log("Рейтинг:", rating);
const { isHighlyRated } = movie;
if (movie.isHighlyRated()) {
    console.log("Фільм має високий рейтинг");
} else {
    console.log("Фільм має середній або низький рейтинг");
}