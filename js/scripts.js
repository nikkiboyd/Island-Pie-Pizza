// Back End Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// Front End Logic
$(document).ready(function() {
  $("#submit-order-button").submit(function() {
    var customerName = $("#input-name").val();
    var pizzaToppings = $("#select-toppings :selected").text();
    var pizzaSize = $("#select-size :selected").text();
    var newPizza = new Pizza(pizzaToppings, pizzaSize);
    $("#customer-name").text(newTicket.movie);
    $("#show-time").text(newTicket.mTime);
    $("#movie-rating").text(newTicket.mRating);
    $("#total-cost").text(newTicket.cost);
  });
});
