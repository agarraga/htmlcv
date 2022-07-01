// Not gonna lie, I've tried to do this with `fetch()` and `response.json()`
// but I get caught in a `promise` rabbit hole that I can't get out of. So I'm
// doing it with a synchronous `XMLHttpRequest`, which apparently is a big no
// no.
// TODO make the non-naive way with `fetch()` work.

// async function getJsonData(path) {
//     const response = await fetch(path);
//     const data = await response.json();
//     return  data;
// }

function getJsonData(path) {
    var request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send();
    return JSON.parse(request.responseText);
}

const cvdata = getJsonData('cv-data.json');
console.log(cvdata);

document.getElementById("app").innerHTML = `
hello ${cvdata.meta.lang}
`;
