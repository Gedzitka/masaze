function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
   
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Více"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Méně"; 
      moreText.style.display = "inline";
    }
    }
   