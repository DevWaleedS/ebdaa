// Scroll to top 
window.addEventListener("scroll", function() {
    // scroll top
    let scrollToTop = document.querySelector(".to-top");
    if (this.scrollY >= 500) {
        scrollToTop.classList.add("show");
    } else {
        scrollToTop.classList.remove("show");
    };
    // 
    scrollToTop.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
});






// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})