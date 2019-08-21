function switchTab(evt, tabName) {
    let class_name = document.getElementsByClassName("intro-card-info");
    let tabColor = document.getElementsByClassName("info-button");

    for (let j = 0; j < class_name.length; j++){
        class_name[j].style.display = "none";
        class_name[j].classList.add("intro-card-info-inactive");
        class_name[j].classList.remove("intro-card-info-active");
        tabColor[j].className = tabColor[j].className.replace(" info-button-active", "")

    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("intro-card-info-active");
    document.getElementById(tabName).classList.remove("intro-card-info-inactive");
    evt.currentTarget.className+= " info-button-active";
}

function circleSwitch(i) {
    let imgClass = document.getElementsByClassName("circle-img");
    let circleClass = document.getElementsByClassName("circle-progress");
    if (imgClass[i].classList.contains("skill-img-display")){
        imgClass[i].classList.remove("skill-img-display");
        imgClass[i].classList.add("skill-img-transition");

        circleClass[i].classList.remove("circle-progress-display");
        circleClass[i].classList.add("circle-progress-active")
    }
    else{
        imgClass[i].classList.remove("skill-img-transition");
        imgClass[i].classList.add("skill-img-display");
        circleClass[i].classList.add("circle-progress-display");
        circleClass[i].classList.remove("circle-progress-active")
    }

}