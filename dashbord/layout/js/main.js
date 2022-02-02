document.querySelector(".toggle-setting .fa-gear").onclick = function(){

    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
    document.querySelector(".exper").classList.toggle("open");
}