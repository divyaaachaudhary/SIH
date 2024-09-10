document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Display thank you message
    document.getElementById('thank-you-message').style.display = 'block';

    // Optionally, you can hide the form after submission
    document.getElementById('feedback-form').style.display = 'none';

    // Submit the form after showing the message
    setTimeout(function() {
        document.getElementById('feedback-form').submit();
    }, 1000); // Adjust the timeout as needed
});