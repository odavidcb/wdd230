
document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the footer
    // Get the current year and update the first paragraph in the footer
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p:first-child').innerHTML = '&copy ' + currentYear + '<br>David Candia <br><br>Bolivia <br> <img src="images/boliviaFlag.jpg" alt="Bolivia  flag" width="40" height="20">';
    document.querySelector('footer p:first-child').innerHTML = '&copy; ' + currentYear + '<br>David Candia <br><br>Bolivia <br> <img src="images/boliviaFlag.jpg" alt="Bolivia flag" width="40" height="20">';

    // Get the last modified date and update the second paragraph
    // Get the last modified date and update the second paragraph in the footer
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerText = 'Last Modified: ' + lastModifiedDate;
});