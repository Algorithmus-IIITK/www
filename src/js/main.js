import $ from "jquery";
import AOS from "aos";

$(window).on("load", () =>
  setTimeout(() => {
    $(".se-pre-con").fadeOut("slow");
  }, 2000)
);

$(window).on("load", AOS.init());
