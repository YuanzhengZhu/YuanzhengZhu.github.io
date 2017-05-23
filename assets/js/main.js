$(document).ready(function() {

  // Add jQuery here

  // On .nav click, toggleClass ON or OFF showme.

  $(document).ready(function() {
    // Add jQuery here

    $(".rollover").mouseenter(function() {
      $(".blur").addClass("showme");
    });

    $(".rollover").mouseleave(function() {
      $(".blur").removeClass("showme");
    });

    $(".magazine").mouseenter(function() {
      $(".magazine__image").addClass("showme");
    });

    $(".magazine").mouseleave(function() {
      $(".magazine__image").removeClass("showme");
    });

    $(".landscape").mouseenter(function() {
      $(".landscape__image").addClass("showme");
    });

    $(".landscape").mouseleave(function() {
      $(".landscape__image").removeClass("showme");
    });
  });
