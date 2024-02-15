// Define an array to store user registrations
let users = [];

// Function to register a new user
function registerUser(username, password, email) {
    // Create a user object
    let user = {
        username: username,
        password: password,
        email: email
    };

    // Add the user object to the users array
    users.push(user);
    console.log('User registered:', user);
    console.log('All users:', users);

    // You can add further logic here such as sending the data to a server or localStorage
}

function register() {
    // Get values from the registration form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    // Call registerUser() with the form values
    registerUser(username, password, email);
}


// Sample usage:
// registerUser('john_doe', 'password123', 'john@example.com');
