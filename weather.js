{/* <ul class="ir-list">
    <li class="timezone"> {timezone} </li>
    <li class="latitude"> {latitude} </li>
    <li class="longitude"> {longitude} </li>
    <li class="lowest-temp"> {hourly.temperature_2m.lowest()} </li>
    <li class="highest-temp"> {hourly.temperature_2m.highest()} </li>
</ul> */}

function getData() {

    // let currList = document.getElementById("cr-list");
    // let elements = currList.children;
    // let dataList = ["timezone", "latitude", "longitude", "hourly.temperature_2m", "hourly.temperature_2m"];

    let dataSource = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&hourly=temperature_2m&timezone=auto&forecast_days=1";
    fetch(dataSource)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(Math.min(...data.hourly.temperature_2m));
            // for (let i=0; i<elements.length-2; i++) {
            //     elements[i].innerHTML = data[dataList[i]];
            // }

            document.getElementById("timezone").innerHTML = data.timezone;
            document.getElementById("latitude").innerHTML = data.latitude;
            document.getElementById("longitude").innerHTML = data.longitude;

            document.getElementById("lowest_temp").innerHTML = parseFloat(Math.min(...data.hourly.temperature_2m));
            document.getElementById("highest_temp").innerHTML = parseFloat(Math.max(...data.hourly.temperature_2m));

            Object.entries(document.getElementsByClassName("weather_code")).map(entry => {
                for (let i=0; i<entry.length; i++) {
                    entry[i].innerHTML = data.hourly_units.temperature_2m;
                }
            })
        })
        .catch((err) => {
            console.log("error." + err);
        });
};
