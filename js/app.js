window.addEventListener("load", function () {
    const OptBeneficios = document.getElementById("OptBeneficios");
    const OptEspecialidades = document.getElementById("OptEspecialidades");
    const boxbeneficios = document.getElementById("boxbeneficios");
    const boxespecialidades = document.getElementById("boxespecialidades");
    
    boxbeneficios.style.display = "flex";
    boxespecialidades.style.display = "none";
  
    OptBeneficios.addEventListener("click", function () {
      toggleDisplay(boxbeneficios, boxespecialidades);
    });
  
    OptEspecialidades.addEventListener("click", function () {
      toggleDisplay(boxespecialidades, boxbeneficios);
    });
  
  });
  
  function toggleDisplay(element1, element2) {
      if (element1.style.display == "none") {
        element1.style.display = "flex";
        if (element2) {
          element2.style.display = "none";
        }
      }
  }
  