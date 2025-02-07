
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clickButton").addEventListener("click", function() {
        document.getElementById("message").textContent = "Hello! You clicked the button.";
    });
});
