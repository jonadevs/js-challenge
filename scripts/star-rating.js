const sectionStarRating = document.getElementsByClassName("star-rating")[0];
const stars = document.getElementsByClassName("star");

for (const star of stars) {
    star.addEventListener("click", (event) => {
        setRating(event.target.dataset.starNumber);
    });
    star.addEventListener("mouseenter", (event) => {
        sectionStarRating.dataset.hover = event.target.dataset.starNumber;
    });
    star.addEventListener("mouseleave", () => {
        sectionStarRating.dataset.hover = 0;
    });
}

function setRating(numberOfStar) {
    sectionStarRating.dataset.rating = numberOfStar;
    for (let i = 0; i < 5; i++) {
        if (i < numberOfStar) {
            stars[i].classList.add("selected");
        } else {
            stars[i].classList.remove("selected");
        }
    }
}

function getNumberOfStar(star) {
    numberOfStar = star.dataset.starNumber;
    if (numberOfStar < 1 || numberOfStar > 5) {
        alert("Couldn't get number of star");
        numberOfStar = 1;
    }
    return numberOfStar;
}
