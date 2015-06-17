$(document).ready(function () {
  simpleCart({
    checkout: {
      type: "PayPal",
      email: "ani.kountz@gmail.com"
    },
    currency: "USD"
  });

  $(".basket-menu").click(function (event) {
    event.preventDefault();
    $("header").toggleClass("show-basket");
  });
});
