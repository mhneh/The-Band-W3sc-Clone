const buyButtons = document.getElementsByClassName("buy-button");
var isOpenTicket = false;
for (let btn of buyButtons) {
    btn.addEventListener("click", showTicketModal);

}

function showTicketModal() {
    document.getElementById("ticket-modal").style.display = "block";
    document.getElementById("cover-layer").style.display = "block";
    closeTicketModal();

}
function closeTicketModal() {
    const closeButtons = document.getElementsByClassName("close");
    for (let btn of closeButtons) {
        btn.addEventListener("click", function (event) {
            document.getElementById("ticket-modal").style.display = "none";
            document.getElementById("cover-layer").style.display = "none";
        });
    }
     // close ticket moda when click outside this
    const coverLayer = document.getElementById("cover-layer");
    coverLayer.addEventListener('click', function (event) {
        document.getElementById("ticket-modal").style.display="none";
        coverLayer.style.display = "none";
        // else {
        //     ticketModal.forEach(f => !f.contains(event.target) ? removeAttribute('open') : '');
        // }
    })

}
// set time out for slider
var i = 0;
function setSlider() {
    var slides = document.getElementsByClassName("my-slide");
    for (let slide of slides)
        slide.style.display = "none";
    if (i === slides.length)
        i = 0;
    slides[i].style.display = "block";
    i++;
    setTimeout(setSlider, 3000);

}
setSlider();
var chose = document.querySelector("header .after button")
var subNav_after = document.querySelector("header .after  .sub-nav")
var style = window.getComputedStyle(subNav_after)
subNav_after.style.display = "none"
chose.addEventListener("click",function(event){
    var display = style.getPropertyValue("display")
    if(display === "block")
        subNav_after.style.display = "none"
    else
        subNav_after.style.display = "block"
    
})