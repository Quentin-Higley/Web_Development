function switchTab(evt, tabName) {
    let class_name = document.getElementsByClassName("tabs");
    let tabColor = document.getElementsByClassName("tab-button");

    for (let i = 0; i < class_name.length; i++){
        class_name[i].style.display = "none";
        tabColor[i].className = tabColor[i].className.replace(" tab-button-active", "")
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className+= " tab-button-active";
}