document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector(".collection-input");
    var dropdown = document.querySelector(".collection-dropdown");
    var dropdownItems = document.querySelectorAll(".collection-dropdown-item");

    document
        .querySelector(".collection-btn")
        .addEventListener("click", function () {
            dropdown.style.display =
                dropdown.style.display === "none" || dropdown.style.display === " "
                    ? "block"
                    : "none";
        });

    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
            input.value = item.textContent;
            dropdown.style.display = "none";
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".collection-input__container")) {
            dropdown.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var notifDropdown = document.querySelector('.alert');
    var notificationIcon = document.querySelector('.notification-icon')

    let isDropdownVisible = false;

    notificationIcon.addEventListener('click', function () {
        notifDropdown.style.display =
            notifDropdown.style.display === 'none' || notifDropdown === ''
                ? 'none'
                : 'block';
    })
})

function hideBanner() {
    var banner = document.querySelector(".banner");
    banner.style.display = "none";
}

function selectPlan() {
    // Add functionality for selecting a plan here
    console.log("Selecting a plan...");
    window.location.href = 'https://www.shopify.com/pricing';
}

// Simulate progress
var progressValue = 20; // Change this value to set the progress (0 to 100)
var progressBar = document.getElementById("myProgressBar");
progressBar.style.width = progressValue + "%";

function toggleGuideBody() {
    // Toggle the visibility of the guide body
    const guideBody = document.querySelector('.setUp__guide-body');
    guideBody.classList.toggle('visible');

    // Toggle the classes on the open and close icons
    const closedIcon = document.querySelector('.icon-closed');
    const openedIcon = document.querySelector('.icon-opened');

    if (guideBody.classList.contains('visible')) {
        // Guide body is visible, add the class for the opened icon and remove the class for the closed icon
        closedIcon.classList.remove('active');
        openedIcon.classList.add('active');
    } else {
        // Guide body is hidden, add the class for the closed icon and remove the class for the opened icon
        closedIcon.classList.add('active');
        openedIcon.classList.remove('active');
    }
}



// Function to change state for a specific card

var currentState = "prestate"; // Initial state
var currentDropdown = null;
var currentPics = null;
var currentTextee = null

function changeState(cardId) {
    var prestateIcon = document.querySelector(`.card-${cardId} .prestate`);
    var loadingIcon = document.querySelector(`.card-${cardId} .loading`);
    var completedIcon = document.querySelector(`.card-${cardId} .completed`);
    var dropdown = document.querySelector(`.card-${cardId} .dropdown`)
    var pics = document.querySelector(`.card-${cardId} .image`)
    var textee = document.querySelector(`.card-${cardId} .headie`)

    if (currentDropdown !== null) {
        currentDropdown.style.display = 'none';
        currentPics.style.display = 'none';
        currentTextee.style.fontWeight = 'normal';
        prestateIcon.style.display = 'block';
    }

    prestateIcon.style.display = 'none';
    loadingIcon.style.display = 'block';
    completedIcon.style.display = 'none';
    dropdown.style.display = 'none';
    pics.style.display = 'none';
    textee.style.fontWeight = 'normal'

    setTimeout(function () {
        if (currentDropdown === dropdown) {
            currentDropdown = null;
            currentPics = null;
            currentTextee = null;
            prestateIcon.style.display = 'block';
            loadingIcon.style.display = 'none';
            completedIcon.style.display = 'none'
        } else {
            prestateIcon.style.display = 'none';
            loadingIcon.style.display = 'none';
            completedIcon.style.display = 'block';
            dropdown.style.display = 'block';
            pics.style.display = 'block';
            currentDropdown = dropdown;
            currentPics = pics;
            currentTextee = textee;
            currentDropdown.checked = true
        }
    }, 500)
}

