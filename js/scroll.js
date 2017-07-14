function smoothScroll(e) {
    let internal = e.currentTarget.classList.contains(".scroll");
    if (internal) { // check if the link is internal
        e.preventDefault();
        // from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
        document.querySelector(e.currentTarget.hash).scrollIntoView({
            behavior: 'smooth'
        });
    }
}

$("body").on("click", "a", smoothScroll);
