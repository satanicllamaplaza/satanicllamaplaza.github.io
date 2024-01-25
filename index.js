function showTime() {
    const date = new Date();

    // Set the time zone to Los Angeles
    const options = {
        timeZone: 'America/Los_Angeles',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString('en-US', options);

    document.getElementById('date').innerHTML = `${formattedDate}, ${formattedTime}`;
    setTimeout(showTime, 1000); // Update every second
}

showTime();

