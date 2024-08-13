document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.querySelector(".type-your-email");
    const passwordInput = document.querySelector(".type-your-password");
    console.log("loaded")

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value;
        const password = passwordInput.value;

        console.log("Email:", email);
        console.log("Password:", password);

        // You can add further logic here, such as sending the data to a server
    });
});

function verifyUser(email, password){

}

function multipleMissedAttempts(){
    
}