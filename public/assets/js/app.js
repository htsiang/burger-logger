$(document).ready(function () {
    console.log('app.js is working');

    getBurgers();

    $('#burgerSubmit').click(function () {
        console.log('clicked');
        let newBurger = {
            "newBurger": [$('#burgerInput').val()]
        };

        console.log(newBurger);

        $.ajax({
            url: '/api/burgers/new',
            method: 'POST',
            data: newBurger
        }).then(res => {
            getBurgers();
        });
    });

    
});

function getBurgers() {
    $.ajax({
        url: '/api/burgers',
        method: 'GET'
    }).then(res => {
        console.log(res);

        let uneatenList = $('<ul>', { class: 'uneatenList' });
        let eatenList = $('<ul>', { class: 'eatenList' });

        for (let i = 0; i < res.length; i++) {
            if(res[i].eatenStatus) {
                // append to eatenlist if eatenstatus is true
                $(eatenList).append(`<li>${res[i].id}. ${res[i].burger}</li>`);
            }
            else {
                // append to uneaten list if eatenStatus is false
                let uneatenBurger = $(`<li>${res[i].id}. ${res[i].burger}  </li>`)
                let eatBurgerButton = $('<button>', {text: "Devour", value: res[i].id, class: "devour"});
                $(uneatenBurger).append(eatBurgerButton);
                $(uneatenList).append(uneatenBurger);
            };
        };

        $('.toEat').html(uneatenList);
        $('.eaten').html(eatenList);

        $('.devour').on("click", function() {
            console.log('devoured');
    
            let updateInfo = {
                'toUpdate': {'eatenStatus': true},
                'updateID': $(this).attr('value')
            };
    
            $.ajax({
                url: '/api/burgers/eat',
                method: 'POST',
                data: updateInfo
            }).then(res => {
                getBurgers();
            })
        })
    });
};