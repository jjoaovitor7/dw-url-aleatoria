const urlsData = JSON.parse(JSON.stringify(urls));

urlsData.forEach((element, index) => {
  document.getElementById(
    "tx-urls"
  ).innerHTML += `${urlsData[index]["site_name"]}\n${urlsData[index]["url"]}\n\n`;
});
