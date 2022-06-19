// 5216b962
// https://omdbapi.com/?t=avengers&apikey=5216b962

$(document).ready(function () {
  var movieCountry = "";
  $("#search-bt").on("click", function () {
    var keyWord = $("#search-text").val();
    url = `https://omdbapi.com/?t=${keyWord}&apikey=5216b962`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movieCountry = data["Country"];
        $("#Title").text(data["Title"]);
        $("#Genre").text(`${data["Genre"]}`);
        $("#Director").text(data["Director"]);
        $("#Plot").text(data["Plot"]);
        $("#Poster").attr("src", data["Poster"]);
        $("#Score").text(data["imdbRating"]);

        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "695cc9b446msh2d7ac6e6a00ded1p1a65a2jsn1ddb90a9759c",
            "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
          },
        };

        fetch("https://unogs-unogs-v1.p.rapidapi.com/static/countries", options)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            response["results"].forEach((result) => {
              if (movieCountry == result["country"]) {
                console.log(result);
                $("#country-info").text(
                  `${result["country"]} has ${result["tmovs"]} movies, and ${result["tseries"]} shows on Netflix`
                );
              }
            });
          })
          .catch((err) => console.error(err));
      });
  });
});
