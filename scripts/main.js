$(document).ready(function () {
  // Find all iframes
  var $iframes = $("iframe");

  // Find & save the aspect ratio for all iframes
  $iframes.each(function () {
    $(this)
      .data("ratio", this.height / this.width)
      // Remove the hardcoded width & height attributes
      .removeAttr("width")
      .removeAttr("height");
  });

  // Resize the iframes when the window is resized
  $(window)
    .resize(function () {
      $iframes.each(function () {
        // Get the parent container's width
        var width = $(this).parent().width();
        $(this)
          .width(width)
          .height(width * $(this).data("ratio"));
      });
      // Resize to fix all iframes on page load.
    })
    .resize();

  ("use strict");

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("main-menu").style.top = "0";
    } else {
      document.getElementById("main-menu").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  };

  var scrollpos = window.scrollY;
  var header = document.getElementById("main-menu");

  function add_class_on_scroll() {
    header.classList.add("scrolled");
  }

  function remove_class_on_scroll() {
    header.classList.remove("scrolled");
  }

  window.addEventListener("scroll", function () {
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if (scrollpos > 100) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
});
