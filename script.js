

let money = +prompt("Який Ваш бюджет на місяць?", "");
     time = prompt("Введіть, будь ласка, дату у форматі YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


/*for (let i = 0; i < 2; i++) {
    let a = prompt("Введіть обов'язкову статтю розсходів у цьому місяці", ""),
        b = prompt("У скільки це обійдеться?", "");

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b; 
    } else {
        console.log("bad result");
        i--;
    } 

}*/



// Використовуємо цикл WHILE 

/*let i = 0;
while (i < 2) {
    let a = prompt("Введіть обов'язкову статтю розсходів у цьому місяці", ""),
        b = prompt("У скільки це обійдеться?", "");

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
        console.log("done");
        
        appData.expenses[a] = b; 
    } else {
        console.log("bad result");
        i--;
    }

    i++;

}*/

//Використовуємо цикл DO...WHILE

let i = 0;

do {
    let a = prompt("Введіть обов'язкову статтю розсходів у цьому місяці", ""),
    b = prompt("У скільки це обійдеться?", "");

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
        console.log("done");
    
        appData.expenses[a] = b; 
    } else {
        console.log("bad result");
        i--;
    }

    i++;
}
while(i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Щоденний бюджет: " + appData.moneyPerDay);

if (appData.MoneyPerDay < 100) {
    console.log("Мінімальний рівень доходу");    
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Середній рівень доходу");
} else if (appData.moneyPerDay > 2000) {
    console.log("Високий рівень доходу");
} else {
    console.log("Сталася помилка");
}