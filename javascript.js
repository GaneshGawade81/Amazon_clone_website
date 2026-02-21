const signinBtn = document.getElementById("signinBtn");
    const dropdown = document.getElementById("dropdown");

    signinBtn.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!signinBtn.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });


