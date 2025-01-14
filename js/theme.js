document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("lightmodebtn");
  const body = document.body;

 
  const savedTheme = localStorage.getItem("theme");


  if (savedTheme === "lightmode") {
    body.classList.add("lightmode");
    
  } else {
    body.classList.add("darkmode");  
   
  }

 
  themeToggleButton.addEventListener("click", () => {
    if (body.classList.contains("lightmode")) {
   
      body.classList.remove("lightmode");
      body.classList.add("darkmode");
     
      localStorage.setItem("theme", "darkmode");
    } else {

      body.classList.remove("darkmode");
      body.classList.add("lightmode");
     
      localStorage.setItem("theme", "lightmode");
    }
  });
});
