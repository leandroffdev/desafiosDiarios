// Time function
function watch() {
    // Takes the date
    const data = new Date();
    // takes the individual data. Like hour
    const hour = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    // Format numbers
    function formatNumber(number) {
        return number.toString().padStart(2, '0');  // ex.: 00:00:00
    }
    // join all in one
    const time = formatNumber(hour) + ':' + formatNumber(minutes)  + ':' + formatNumber(seconds);
    // sets the new data
    document.querySelector('.screen').innerHTML = time;
}
// updates the screen information after 1 second
const screen = setInterval(watch, 1000);
