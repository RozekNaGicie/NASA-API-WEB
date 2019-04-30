$(function () {
    var dataVal = $('input');
    var loader = $('lds-ring');
    
    $('.apiBtn').on('click', function () {
        var sols = $(dataVal).val();
        solsNumber = parseInt(sols);
        if (jQuery.type(solsNumber) == "number") {

            $('.articleContainer').removeClass('invisible');
            var arr = [];
            $.ajax({
                url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + solsNumber + '&api_key=7e0Ijg4BmetFppgZfsGHD5gV0FkDtxRCPdJ0nglV',
                method: 'GET',
                dataType: 'json'
            }).done(function (response) {
                for (i = 0; i < 4; i++) {
                    arr.push(response.photos[i].img_src);
                };
                for (i = 0; i < arr.length; i++) {
                    var spaces = $('<div></div>');
                    $(spaces).addClass('col-4 border');
                    $(spaces).css('background-image', 'url("' + arr[i] + '")');
                    $('.images').append(spaces);
                    var numbers = $(`<span> SOL ${solsNumber}</span>`);
                    $(numbers).addClass('solsNumber');
                    $(spaces).append(numbers);
                };
            });
        };
    });
    clicker = 0;
    setInterval(function () {
        loader.addClass('active');
    }, 500);
    $('.moreApiBtn').on('click', function () {
        var sols = $(dataVal).val();
        solsNumber = parseInt(sols);
        clicker++;
        var arr = [];
        count = 4 * clicker;
        $.ajax({
            url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + solsNumber + '&api_key=7e0Ijg4BmetFppgZfsGHD5gV0FkDtxRCPdJ0nglV',
            method: 'GET',
            dataType: 'json'
        }).done(function (response) {
            for (i = count; i < count + 4; i++) {
                arr.push(response.photos[i].img_src);
            };
            for (i = 0; i < arr.length; i++) {
                var spaces = $('<div></div>');
                $(spaces).addClass('col-4 border');
                $(spaces).css('background-image', 'url("' + arr[i] + '")');
                $('.images').append(spaces);
                var numbers = $(`<span> SOL ${solsNumber}</span>`);
                $(numbers).addClass('solsNumber');
                $(spaces).append(numbers);
            };
        });
    });

});