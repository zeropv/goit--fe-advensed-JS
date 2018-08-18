const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const userInput = prompt('Введите пароль');

const isLoginValid =  (login) => {
    return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = (allLogins, login) => {
    return allLogins.includes(login) ? true : false;
};


const addLogin =  (alllogins, login) => {
    switch (true) {
        case !isLoginValid(login):
            return alert('Ошибка! Логин должен быть от 4 до 16 символов');
        case !isLoginUnique(logins, login):
            alert('Логин успешно добавлен!');
            return logins.push(login);
        default:
            return alert('Такой логин уже используется!');
    }
};

addLogin(logins, userInput);

console.log(logins);