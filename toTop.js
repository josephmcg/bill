$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#topBtn").show();
    } else {
      $("#topBtn").hide();
    }
  });
});
