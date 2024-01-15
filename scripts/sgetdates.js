<script>
    // JavaScript code to dynamically populate the footer content

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get the element with id "copyright" and set its content
    document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Your Name, Your State/Country";

    // Get the element with id "lastModified" and set its content
    document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;