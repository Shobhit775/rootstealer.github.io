document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const logoText = document.getElementById('logo-text');
    const text = "Root_Stealer";  // Set the text to "Root_Stealer"
    let index = 0;

    // Function to type the text one character at a time
    function typeText() {
        if (index < text.length) {
            // Add one character at a time with the pipe cursor
            logoText.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeText, 150); // Adjust the speed of typing (150ms between each letter)
        } else {
            // Once the text is fully typed, the cursor will remain
            logoText.innerHTML = text + '<span class="cursor">|</span>';
            setTimeout(() => {
                // Reset and restart the typing effect after 1 second
                logoText.innerHTML = ""; // Clear the text
                index = 0; // Reset index
                typeText(); // Start typing again
            }, 2000); // Wait for 1 second before restarting the typing effect
        }
    }

    // Start the typing animation
    typeText();
});


