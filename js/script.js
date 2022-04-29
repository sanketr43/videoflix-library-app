let sidebarBtn = document.getElementById("sidebarBtn");
sidebarBtn.addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    if(sidebar.style.display === "none" || sidebar.style.display == ""){
        sidebar.style.display = "block";
    }else{
        sidebar.style.display = "none";
    }
});
