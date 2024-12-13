document.querySelectorAll('.gallery-item img').forEach((img) => {
    const originalSrc = img.src;
    const gifSrc = img.getAttribute('data-gif');
  
    img.addEventListener('mouseover', () => {
      img.src = gifSrc;
    });
  
    img.addEventListener('mouseout', () => {
      img.src = originalSrc;
    });
  });



  // function toggleOverlay(section) {
  //   const overlay = document.getElementById("about-overlay");
  //   const video = document.querySelector(".video-container iframe");
  //   const overlaytwo = document.getElementById("work-overlay-sec");



  //   if (section === "about") {
  //     overlaytwo.style.display="none"
  //     overlay.style.display="flex"
  //     overlay.classList.toggle("hidden");
  //     video.classList.toggle("blur");

      

  //   }
    

  //   if (overlay.classList.contains("hidden")) {
  //     video.classList.remove("blur");
  //   }
    
  // }




  // function toggleOverlayTwo(section) {
  //   const overlaytwo = document.getElementById("work-overlay-sec");
  //   const video = document.querySelector(".video-container iframe");
  //   const overlay = document.getElementById("about-overlay");


  //   if (section === "work") {
  //     overlay.style.display="none"
  //     overlaytwo.style.display="block"
  //     overlaytwo.classList.toggle("hidden-two");
  //     video.classList.toggle("blur");


     

  //   }

  //   if (overlaytwo.classList.contains("hidden-two")) {
  //     video.classList.remove("blur-two");
  //   }
  // }


  // Show the menu after 7 seconds
 
 
 

  function toggleOverlay(section) {
    const aboutOverlay = document.getElementById("about-overlay");
    const workOverlay = document.getElementById("work-overlay-sec");
    const video = document.querySelector(".video-container iframe");
    const workClass = document.querySelector(".overlay-two");

    if (section === "about") {
        // Show the "about" overlay and hide the "work" overlay
        workOverlay.style.display = "none";
        aboutOverlay.style.display = "flex";
        aboutOverlay.classList.toggle("hidden");
        workOverlay.classList.add("hidden-two");
        video.classList.toggle("blur", true);
      } else if (section === "work") {
        // Show the "work" overlay and hide the "about" overlay
        aboutOverlay.style.display = "none";
        workClass.style.transition = "opacity 0.5s ease";
        workOverlay.style.display = "block";
        workOverlay.classList.toggle("hidden-two");
        aboutOverlay.classList.add("hidden");
        video.classList.toggle("blur", true);
    }

    // If both overlays are hidden, remove the blur effect
    if (aboutOverlay.classList.contains("hidden") && workOverlay.classList.contains("hidden-two")) {
        video.classList.remove("blur") &&  video.classList.remove("blur-two");
    }
}

 
 
 
 
  window.onload = function () {
    setTimeout(function () {
      document.querySelector(".menu").classList.remove("hidden");
      // document.querySelector(".menu").classList.remove("hidden2");
    }, 3000);
  };

