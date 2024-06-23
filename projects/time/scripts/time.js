// Time function
function watch() {
    // Takes the date
    const data = new Date();
    // takes the individual data. Like hour
    const hour = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    // join all in one
    const time = hour + ':' + minutes  + ':' + seconds;
    // sets the new data
    document.querySelector('.screen').innerHTML = time;
}
// updates the screen information after 1 second
const screen = setInterval(watch, 1000);
