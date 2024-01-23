document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    // Prevent input events on the display
    display.addEventListener('input', function(event) {
        event.preventDefault();
        this.value = ''; // Clear the display
    });
});
