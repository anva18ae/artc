class Exhibition {
    constructor(exhibitionID, name, artType, artStyle, description, startDate, endDate) {
        this.exhibitionID = exhibitionID;
        this.name = name;
        this.artType = artType;
        this.artStyle = artStyle;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    rating() {

    }
}


getCapacity ()

class Venue {
    constructor(venueID, name, venueType, openingHours, geoLocation, contactInformation) {
        this.venueID = venueID;
        this.name = name;
        this.venueType = venueType;
        this.openingHours = openingHours;
        this.geoLocation = geoLocation;
        this.contactInformation = contactInformation;
    }
}



function init() {
    document.getElementById("defaultOpen").click();
}

function openTab(event, listName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" (button) and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(listName).style.display = "block";
    event.currentTarget.className += " active";
}


// https://www.w3schools.com/howto/howto_js_tabs.asp 