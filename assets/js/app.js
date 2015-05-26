$(document).ready(function () {
  simpleCart({
    checkout: {
      type: "PayPal",
      email: "youarewhatyouart@gmail.com"
    },
    currency: "USD"
  });

  $(".basket-menu").click(function (event) {
    event.preventDefault();
    $("header").toggleClass("show-basket");
  });
});
