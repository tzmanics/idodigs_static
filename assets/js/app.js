simpleCart({
  checkout: {
    type: "PayPal",
    email: "youarewhatyouart@gmail.com"
  },
  currency: "USD"
});

$( ".basket-menu" ).click(function() {
  event.preventDefault();
  $("header").toggleClass( "show-basket" );
});

// var gift  = document.getElementsByClassName("gift");
// console.log('gift', gift);

// var addGift = function () {
//   var name = this.getAttribute("name");
//   var price = this.getAttribute("price");
//   console.log(name + ' $' + price);
// };

// for (var i = 0; i < gift.length; i++) {
//   gift[i].addEventListener('click', addGift, false);
// }

