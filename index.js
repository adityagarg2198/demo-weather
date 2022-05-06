const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const value = document.querySelector(".form-control").value;
  const result = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=bf97ef9c546e4071b49154721220105&q=${value}&aqi=no`,
    {
      accept: "application/json",
    }
  );
  const data = await result.json();
  const name = data.location.name;
  const temp = data.current.temp_c;
  const condition = data.current.condition.text;
  const image = data.current.condition.icon;
  const humidity = data.current.humidity;
  const hcity = document.querySelector("#city");
  const htemp = document.querySelector("#temp");
  const hcondition = document.querySelector("#condition");
  const himage = document.querySelector(".content-image");
  const hHumidity = document.querySelector("#humidity");

  hcity.textContent = `City: ${name}`;
  htemp.textContent = `${temp} :C`;
  hcondition.textContent = `${condition} condition`;
  hHumidity.textContent = `humidity :${humidity}`;
  himage.src = image;
});
