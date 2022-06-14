// Load json filse over HTTP request.
export function lodJsonFile(callback) {
    var xobject = new XMLHttpRequest();

    xobject.overrideMimeType("application/json");
    xobject.open('GET', './data/data.json', true);

    xobject.onreadystatechange = function () {
        if (xobject.readyState === 4 && xobject.status === 200) {
            callback(xobject.responseText);
        }
    };

    xobject.send(null);
}
