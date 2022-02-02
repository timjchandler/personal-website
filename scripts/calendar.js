// Get the current date
let today = new Date();

// Get month and year
let current_month = today.getMonth();
let current_year = today.getFullYear();

// Define month names
let months = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
]

function build_year(year) {
    
    
    // Build each month
    for (let month = 1; month <= 12; ++month) {
        let month_wrapper = document.createElement("month-wrapper");
        build_month(month, year, month_wrapper);

    }
}

function build_month(month, year, wrapper) {
    // Calculate month properties
    let start = (new Date(year, month)).getDay();
    let total_days = new Date(year, month, 0).getDate();

    wrapper.innerHTML = months[month];

    for (let date = 1; date <= total_days; ++date) {
        // todo
    }
}

