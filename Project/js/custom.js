$(document).ready(function () {
  let footerLinkEle = $(".footer-links-wrapper h3");
  console.log(footerLinkEle);
  let footEle = $(".footer-links-wrapper ul");
  console.log(footEle);
  if (window.matchMedia("(max-width: 768px)").matches) {
    footerLinkEle.on("click", function () {
      $(this).next().toggle();
      $(this).toggleClass("expand");
    });
  }
  $(window).resize(function () {
    console.log($(window).width());
    //   // reload the page
    location.reload();
  });

  // for (i = 0; i < footerLinkEle.length; i++) {
  //   let footerLink = footerLinkEle[i];
  //   let foot = footEle[i];
  //   footerLink.click(() => {
  //     foot.toggle();
  //     footerLink.toggleClass("expand");
  //     if (footerLink.hasClass("expand")) {
  //       footerLink.removeClass("expand");
  //     } else {
  //       footerLink.addClass("expand");
  //     }
  //   });
  // }
});

// const h3Elements = $(".footer-links-wrapper h3");
// console.log(h3Elements);
// h3Elements.on("click", function () {
//   console.log($(window).width());
//   // add window width condition
//   if ($(window).width() <= 768) {
//     // toggle the visibiltiy of the ul element
//     console.log($(this));
//     console.log($(this).next());
//     $(this).next().slideToggle();
//     // toogel the classname
//     $(this).toggleClass("expanded ");
//   }
// });
// $(window).resize(function () {
//   console.log($(window).width());
//   // reload the page
//   location.reload();
