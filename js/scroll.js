function smoothScroll(e) {
  let internal = e.currentTarget.classList.contains(".scroll");
  if (internal) { // check if the link is internal
    $('html, body').animate({
      scrollTop: $(e.currentTarget.hash).offset().top // makes it g
    }, 400, 'swing');
  }
}

$("body").on("click", "a", smoothScroll);
