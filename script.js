// 5216b962
// https://omdbapi.com/?t=avengers&apikey=5216b962

// function to get api data and edit html //

$(document).ready(function () {
  var movieCountry = "";
  var movieTag = "";
  $("#search-bt").on("click", function () {
    var keyWord = $("#search-text").val();
    url = `https://omdbapi.com/?t=${keyWord}&apikey=5216b962`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movieCountry = data["Country"];
        movieTag = data["imdbID"];
        console.log(movieTag);
        $("#Title").text(data["Title"]);
        $("#Genre").text(`${data["Genre"]}`);
        $("#Director").text(data["Director"]);
        $("#Plot").text(data["Plot"]);
        $("#Poster").attr("src", data["Poster"]);
        $("#Score").text(data["imdbRating"]);



        // function that pass movieTag variable from above to second api //
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '89c588b05bmsh60e709fda358096p14890cjsn1969f0e5a15f',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
          }
        };

        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=" + movieTag + "&output_language=en", options)
          .then(response => response.json())
          .then(response => console.log(response))
        // $("#streamingServices").text(data["streamingInfo"]["netflix"]["us"]);

      });
  });

});
