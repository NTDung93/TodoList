const navItem = document.querySelectorAll(".user")

console.log(navItem);
navItem.forEach(item => {
    item.addEventListener("mouseenter", event => {
        // navItem.forEach(it => {
        //     it.classList.remove("actived")
            
        // })
        event.target.classList.add("actived")
    })
    item.addEventListener("mouseleave", event => {
        event.target.classList.remove("actived")
    })

})