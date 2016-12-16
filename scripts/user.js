const API_URL = getHostURL();

$(document).ready(function() {
    const query = parseQueryString(window.location.search);

    $.get(`${API_URL}user/${query.id}`, function(data) {
        console.log(data);
        $('.user').append(`<h1>${data.name}</h1>`);
    });

    $.get(`${API_URL}user/${query.id}/car`, function(data) {
        data.forEach(function(car) {
            $('.cars').append(`
              <div class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="${car.image}" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">${car.make}, ${car.model}</h4>
                </div>
              </div>
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

function getHostURL() {
    if (window.location.host.indexOf('localhost') != -1) {
        return 'http://localhost:3000';
    } else {
        return 'https://carcrud.herokuapp.com/';
    }
}
