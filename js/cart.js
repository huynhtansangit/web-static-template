$('.icon-bar  ul  li  a').hover(function () {
        $(this).find(".cart-number").addClass("change-color-span");
        
    }, function () {
        $(this).find(".cart-number").removeClass("change-color-span");
    }
);
$(document).ready(function () {
    if ($('.box div div h2').text().length> 6 & $('.box div div h2').text().length< 12)
    {
        $('.box div div h2').css('font-size', '30px');
        console.log("title's more than 6 letters");
    }
    else if ($('.box div div h2').text().length>= 12 & $('.box div div h2').text().length<= 16)
    {
        $('.box div div h2').css('font-size', '25px');
        console.log("title's more than 12 letters");
    }
    else if ($('.box div div h2').text().length>16)
    {
        $('.box div div h2').css('font-size', '20px');
        console.log("title's more than 16 letters");
    }
    // add banner img 
    if ($('#cart').length > 0) {
        $('.title >div').css('background-image', "url('./images/cart/cart-landscape.png')");
    }
    else if ($('#detail').length > 0)
    {
        $('.title >div').css('background-image', "url('./images/product-detail/product-landscape.png')");
    }
    else if ($('#list').length > 0)
    {
        $('.title >div').css('background-image', "url('./images/product-list/list-landscape.png')");
    }
});