function randomEmail(name) {
    const domainSelect = document.getElementById("emailDomain");
    const customDomain = document.getElementById("customDomain");
    
    let domain;
    if (domainSelect.value === "custom") {
        domain = customDomain.value || "custom.com"; // Default if empty
    } else {
        domain = domainSelect.value;
    }
    
    // Clean the name and create email
    const cleanName = name.toLowerCase().replace(/\s+/g, "");
    return cleanName + "@" + domain ;
}

function randomPhone() {
    const countrySelect = document.getElementById("countryCode");
    const phoneSelect = document.getElementById("phoneFormat");
    
    // Generate random numbers
    const areaCode = Math.floor(100 + Math.random() * 900); // 3 digits
    const prefix = Math.floor(100 + Math.random() * 900); // 3 digits
    const lineNumber = Math.floor(100 + Math.random() * 900); // 4 digits
    
    let countryCode = countrySelect.value;
    
 // Return phone with country code + numbers
    return countryCode + " " + areaCode + " " + prefix + " " + lineNumber;
}

function generateData() {
    let count = parseInt(document.getElementById("count").value);
    let output = document.getElementById("output");
    
    // Clear previous content
    output.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let name = randomName();
        
        // Create record div with class
        let record = document.createElement("div");
        record.className = "record";
        
        record.innerHTML = 
            "Name: " + name + "<br>" +
            "Email: " + randomEmail(name) + "<br>" +
            "Phone: " + randomPhone();
        
        output.appendChild(record);
    }
}
function copyToClipboard() {
    const output = document.getElementById("output").textContent;
    navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
}

// Event listener 


document.addEventListener("DOMContentLoaded", function() {
    const domainSelect = document.getElementById("emailDomain");
    const customDomain = document.getElementById("customDomain");
    
    domainSelect.addEventListener("change", function() {
        if (this.value === "custom") {
            customDomain.style.display = "inline-block";
        } else {
            customDomain.style.display = "none";
        }
    });
});




