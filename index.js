//function showTime() {
//	const date = new Date();
//
//	let today = date.toLocaleString("en", { weekday: "long" });
//	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
//	let minute = date.toLocaleString("en", { minute: "2-digit" });
//	let second = date.toLocaleString("en", { second: "2-digit" });
//	let day = date.toLocaleString("en", { day: "2-digit" });
//	let month = date.toLocaleString("en", { month: "2-digit" });
//	let year = date.toLocaleString("en", { year: "numeric" });
//
//	minute = addZero(minute);
//	second = addZero(second);
//
//	document.getElementById(
//		"date"
//	).innerHTML = `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
//	setTimeout(showTime, 0);
//}
//
//function addZero(i) {
//	if (i.length < 2) i = "0" + i;
//	return i;
//}
//
//showTime();

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

