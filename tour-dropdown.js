console.log("test");

const reqURL = "placeholder";

requestTours();

/**
 * Sends a request to the server to obtain a collection of the tours
 * that will be added to the dropdown menu.
 */
async function requestTours () {
    const response = await fetch(reqURL);
    console.log(response);

    if (response.status == 200)
    {
        updateDropdownItems(await response.json());
    }   
    // If the response was unsuccessful, signal that the tours weren't loaded properly
    else
    {
        const tourPlaceholder = {
            name: "Error loading tours",
            url: "."
        };
        updateDropdownItems([tourPlaceholder]);
    } 
}

/**
 * Populates the tour dropdown menu with tours and links to their pages.
 * @param {} tourList A collection of tours that will be added to the menu.
 */
function updateDropdownItems(tourList) {
    const dropdownItems = document.getElementById("dropdown-items");

    // Iterate through the list of tours, adding each one to the dropdown items element
    foreach (tour in tourList)
    {
        // Create a list item and set the text to the tour name
        const listItem = document.createElement("li");
        listItem.textContent = tour.name;

        // Create an anchor tag and set the href to the tour's URL
        const tourLink = document.createElement("a");
        tourLink.setAttribute("href", tour.url);

        // Add the anchor to the list item, and the list item to the list
        listItem.appendChild(tourLink);
        dropdownItems.appendChild(listItem);
    }
}