$(document).ready(function () {
    console.log('app.js is working');

    $('#burgerSubmit').click(function () {
        console.log('clicked');
        let newBurger = $('#burgerInput').val();

        console.log(newBurger);

        axios.post()
    });
});