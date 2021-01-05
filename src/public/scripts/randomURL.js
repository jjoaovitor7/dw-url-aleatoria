const urlsData = JSON.parse(JSON.stringify(urls));

document
  .querySelector("div#btn-getURL button")
  .addEventListener("click", function () {
    let random = Math.floor(Math.random() * urlsData.length);
    document.getElementById(
      "p-url"
    ).innerHTML = `${urlsData[random]["site_name"]} <br />${urlsData[random]["url"]}`;
  });
