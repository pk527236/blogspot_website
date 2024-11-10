// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter

document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const postBoxes = document.querySelectorAll(".post-box");

    filterItems.forEach(function (filterItem) {
        filterItem.addEventListener("click", function () {
            const value = filterItem.getAttribute("data-filter");
            
            // Hide or show the posts based on filter
            postBoxes.forEach(function (postBox) {
                if (value === "all") {
                    postBox.style.display = "block"; // Show all posts
                } else if (postBox.classList.contains(value)) {
                    postBox.style.display = "block"; // Show matching category
                } else {
                    postBox.style.display = "none"; // Hide non-matching posts
                }
            });

            // Add active class to the clicked filter item
            filterItems.forEach(function (item) {
                item.classList.remove("active-filter");
            });
            filterItem.classList.add("active-filter");
        });
    });
});
