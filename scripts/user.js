const API_URL = ''

$(document).ready(function() {
  const query = parseQueryString(window.location.search);

  $.get(`http://localhost:3000/user/${query.id}`, function(data) {
    console.log(data);
    $('.user').append(`<h1>${data.email}</h1>`);
  });

  $.get(`http://localhost:3000/user/${query.id}/car`, function(data) {
    data.forEach(function(car) {
      $('.cars').append(`
        <h1>${car.make}</h1>
        <h2>${car.model}</h2>
        <p>${car.year}</p>
        `);
    });
  });


});


function parseQueryString(queryString) {
  let answer = {};
  let splitStr = queryString.split('&');
  splitStr.forEach((str) => {
    let pair = str.replace('?', '');
    pair = pair.split('=');
    answer[pair[0]] = pair[1];
  });
  return answer;
}
