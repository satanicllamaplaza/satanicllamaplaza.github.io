function showTime() {
    const date = new Date();
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

    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    if (dateElement) {
        dateElement.innerHTML = `${formattedDate}`;
    } else {
        console.error('Element with id "date" not found.');
    }

    if (timeElement) {
        timeElement.innerHTML = `${formattedTime}`;
    } else {
        console.error('Element with id "time" not found.');
    }

    requestAnimationFrame(showTime); // Efficient update
}

showTime();
