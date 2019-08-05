if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/trident/i) > 0)
    console.log('Internet Explorer');

if (navigator.userAgent.search(/Edge/i) > 0) {
    $('head').append('<link rel="stylesheet" href="css/IEstyle.css">');
}