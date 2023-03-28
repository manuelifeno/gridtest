document.getElementById("menuToggle").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("navigation_2Layer").style.backgroundColor = "#3a3f3f"
    }
    else {
        document.getElementById("navigation_2Layer").style.backgroundColor = "#222525"
    }
});

let calculateExperienceTime = function() {
    let currentDate = new Date();
    let graduationDate = new Date(2020, 05); 
    let monthsDifference;
    monthsDifference = (currentDate.getFullYear() - graduationDate.getFullYear()) * 12;
    monthsDifference -= graduationDate.getMonth();
    monthsDifference += currentDate.getMonth();
    return ` ${parseInt(monthsDifference / 12)} years and ${monthsDifference % 12} months of experience as a developer`;
}

addEventListener("load", function() {
    this.document.getElementById("experienceResult").innerHTML = calculateExperienceTime();
});

document.getElementById("contactButton").addEventListener("click", function() {
    let card = document.getElementById("contactCard");
    if (this.classList.contains("buttonActive")) {
        this.classList.remove("buttonActive");
        this.classList.add("buttonInactive");
        this.innerHTML = "HIDE CONTACT"
        card.classList.remove("notVisibleCard")
        card.classList.add("visibleCard");
    }
    else {
        this.classList.remove("buttonInactive");
        this.classList.add("buttonActive");
        this.innerHTML = "CONTACT ME"
        card.classList.remove("visibleCard")
        card.classList.add("notVisibleCard");
    }
});

