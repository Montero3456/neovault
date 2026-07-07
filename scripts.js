```javascript
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const section = document.querySelector(
            this.getAttribute("href")
        );


        if (section) {

            event.preventDefault();


            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Simple page entrance animation

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
```
