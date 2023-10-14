class Person {
    constructor(firstName, lastName, age) {
        if(!firstName || !lastName || !age || age >= 18) {
            throw new Error('Invalid or insufficient parameters. Age must be under 18.');
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const generateValidAge = () => {
    let age;
    do {
        age = Math.ceil(Math.random() * 20) - 1;  // Generates a number from 0 to 19
    } while (age < 0 || age >= 18);
    return age;
}

const createPeople = async () => {
    let response = await fetch('./assets/users.json');
    let usersJson = await response.json();

    const people = [];
    let totalPeople = 0;

    while (totalPeople < 100) {
        for (let user of usersJson) {
            if (totalPeople >= 100) break;

            try {
                const person = new Person(user.first_name, user.last_name, generateValidAge());
                people.push(person);
                totalPeople++;
            } catch (error) {
                console.log('Error creating person:', error);
            }
        }
    }

    return people;
}

createPeople().then(people => console.log(people));