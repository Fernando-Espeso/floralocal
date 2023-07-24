/*
 * Cart Scripts
 */

$(document).ready(function(){
  //Function add product
  function incrementValue(e){
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).parents('div');
    var currentVal = parseInt(parent.find('input[name="updates[]"]').val(), 10);
    if (!isNaN(currentVal)) {
      parent.find('input[name="updates[]"]').val(currentVal + 1);
    } else {
      parent.find('input[name="updates[]"]').val(0);
    }
  }
  //Function remove product
  function decrementValue(e){
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).parents('div');
    var currentVal = parseInt(parent.find('input[name="updates[]"]').val(), 10);    
    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name="updates[]"]').val(currentVal - 1);
    } else {
      parent.find('input[name="updates[]"]').val(0);
    }
  }
  //Add/Remove Item
  setTimeout(function(){
    $('.item-quantity').each(function() {
      var quantity = $(this).find('input').val(),
          quentityDiv = $(this).find('.quantity-wrap');
      quentityDiv.text(quantity);
      $(this).on('click', '.plus', function(e) {
        incrementValue(e);
      });
      $(this).on('click', '.minus', function(e) {
        decrementValue(e);
      });
    });
  }, 20);
  //Update Cart
  $(document).on('click', '.quantity-button', function(e) {
    e.preventDefault();
    setTimeout(function(){
      $("#update-cart").click();
    }, 20);
  });
});