const bankAccount = {
    ownerName: "Nazar",
    accountNumber: "12345687",
    balance: 1000,

    deposit(amount) {
        this.balance += amount
        alert(`ваш рахунок поповнено на ${amount} загальна сума на вашому рахунку ${this.balance}`)
    },
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            alert(`Зняття коштів успішне зараз на вашому рахунку ${this.balance}`)
        } else {
            alert(`Недостатньо коштів на вашому рахунку ${this.balance}! Ви хочете зняти ${amount}`)
        }
    },
}
if (confirm("Бажаете поповнити рахунок?")) {
    const amount = parseFloat(prompt(`Введіть суму для поповнення`));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(amount)
    } else {
        alert(`Некоректно введені дані`)
    }
} else if (confirm(`Чи бажаете ви зняти гроші?`)) {
    const amount = parseFloat(prompt(`Введіть суму для зняття`))
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withdraw(amount)
    } else {
        alert(`Не коректно введені дані`)
    }
}

const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isBelowZero: function () {
        return this.temperature < 0;
    }
};
const tempInput = prompt("Введіть температуру в градусах Цельсія:");
weather.temperature = parseFloat(tempInput);
if (weather.isBelowZero()) {
    console.log("Температура нижче 0 градусів Цельсія");
} else {
    console.log("Температура вище або рівна 0 градусів Цельсія");
}

const user = {
    name: "Назар",
    email: "gromenkonazar@gmail.com",
    password: "123456",
    login: function (inputEmail, inputPassword) {
        return this.email === inputEmail && this.password === inputPassword;
    }
};
const emailInput = prompt("Введіть email:");
const passwordInput = prompt("Введіть пароль:");
if (user.login(emailInput, passwordInput)) {
    console.log(`Вхід успішний. Ласкаво просимо, ${user.name}!`);
} else {
    console.log("Невірний email або пароль");
}

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 7,
    isHighlyRated: function () {
        return this.rating > 8;
    }
};
console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
if (movie.isHighlyRated()) {
    console.log("Фільм має високий рейтинг");
} else {
    console.log("Фільм має середній або низький рейтинг");
}