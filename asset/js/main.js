function eventSearch() {
  let filterSelected = document.querySelector(".filterSelected");
  let search = document.getElementById("searchinputDdk").value;
  let filterAsset = "";
  if (filterSelected) {
    let typeFilterAsset = filterSelected.textContent.trim();
    console.log("typeFilterAsset", typeFilterAsset);

    switch (typeFilterAsset) {
      /* Business Assets */
      case "Data Domains":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031114&";
        break;
      case "Data Concepts":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031113&";
        break;
      case "Business Terms":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000011001&";
        break;
      case "KPI":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000011002&";
        break;
      case "Reports":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031102&";
        break;

      /* Data Assets */

      case "Data Sets":
        filterAsset = "&asset_type=00000000-0000-0000-0001-000400000001&";
        break;

      case "Schemas":
        filterAsset = "&asset_type=00000000-0000-0000-0001-000400000002&";
        break;

      case "Tables":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031007&";
        break;

      case "Columns":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031008&";
        break;

      /* Technology Assets */

      case "Systems":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031302&";
        break;
      case "Applications":
        filterAsset = "&asset_type=e0fc7a49-8b5c-4cdc-865c-d5eee8ae2b1c&";
        break;
      case "Files":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031304&";
        break;
      /* Governance Assets */

      case "Busines Rules":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031204&";
        break;
      case "Data Quality Rules":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031205&";
        break;

      /* Issues */

      case "Data Issues":
        filterAsset = "&asset_type=00000000-0000-0000-0000-000000031001&";
        break;
    }
  }

  const urlCollibra = "https://ps-internal-tony.collibra.com"; //URL collibra
  window.top.location.replace(
    urlCollibra +
      "/search?q=*" +
      search +
      (filterAsset !== "" ? filterAsset : "")
  );
  //window.open(urlCollibra+'/search?q=*'+search+(filterAsset!==''?filterAsset:''),'_blank');
  //window.top.location.replace('/search?q=' + document.getElementById('input').value);
  //window.top.location.replace
}
var searchInput = document.getElementById("searchinputDdk");
searchInput.addEventListener("keyup", function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    event.preventDefault();
    eventSearch();
  }
});

/**
 * Filter
 */
document.querySelectorAll(".filterAsset").forEach((item) => {
  item.addEventListener("click", (event) => {
    //remove select on others
    document.querySelectorAll(".filterAsset").forEach((item) => {
      item.classList.remove("filterSelected");
      item.classList.remove("itemSelected");
    });
    //add active on selected element
    item.classList.add("filterSelected");
    item.classList.add("itemSelected");
    let typeAsset = item.textContent.trim();
    console.log("typeAsset", typeAsset);
  });
});
document
  .querySelector("#searchButtonDdk")
  .addEventListener("click", function () {
    eventSearch();
  });

window.addEventListener("scroll", function (e) {
  console.log("SCROLL", window.scrollY);
  if (window.scrollY > 0) {
    document.getElementById("site-header").classList.add("sticky");

    document.querySelector("a").classList.add("test");
  } else {
    document.getElementById("site-header").classList.remove("sticky");
  }
});
