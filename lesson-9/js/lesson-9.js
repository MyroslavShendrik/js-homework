const logins = ["Mipkol", "Mipkolim"];

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (isLoginValid(login)) {
        return 'Логін повинен бути від 4 до 16 символів';
    }
    
    if (isLoginUnique(allLogins, login)) {
        return 'Такий логін вже є';
    }
    
    allLogins.push(login);
    return 'Логін успішно доданий';
}
console.log(addLogin(logins, "Max"));
console.log(addLogin(logins, "Mipkol")); 
console.log(addLogin(logins, "Alg"));  
console.log(addLogin(logins, "4343434343434343434343434343434343434"));  