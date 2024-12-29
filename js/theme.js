document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("lightmodebtn");
    const body = document.body;
  

    const savedTheme = localStorage.getItem("theme");
  

    if (savedTheme === "lightmode") {
      body.classList.add("lightmode");
    }
  
    themeToggleButton.addEventListener("click", () => {
      if (body.classList.contains("lightmode")) {
        body.classList.remove("lightmode");
        localStorage.setItem("theme", "darkmode");
      } else {
        body.classList.add("lightmode");
        localStorage.setItem("theme", "lightmode");
      }
    });
  });
  