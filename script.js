// Click Event
document.getElementById("clickMeBtn").addEventListener("click", function() {
    alert("Button was clicked!");
  });
  
  // Hover Event
  document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "orange";
  });
  document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
  });
  
  // Keypress Detection
  document.getElementById("keyInput").addEventListener("keypress", function(e) {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Change Text
  document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("textToChange").textContent = "You changed me!";
  });
  
  // Image Gallery
  let imageIndex = 0;
  const images = [
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000",
    "https://via.placeholder.com/150/00FF00"
  ];
  
  document.getElementById("nextImageBtn").addEventListener("click", function() {
    imageIndex = (imageIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[imageIndex];
  });
  
  // Accordion
  document.querySelector(".accordion-header").addEventListener("click", function() {
    const content = document.querySelector(".accordion-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
  
  // Form Validation
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      document.getElementById("formFeedback").textContent = "Please fill in all fields.";
    } else if (password.length < 8) {
      document.getElementById("formFeedback").textContent = "Password must be at least 8 characters.";
    } else {
      document.getElementById("formFeedback").textContent = "Form submitted successfully!";
    }
  });
  