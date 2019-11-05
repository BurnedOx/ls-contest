function combineResults(cafes, places, result) {
    cafes.forEach(c => {
        places.forEach(p => {
            if (c.location_id === p.id) {
                result.push({ ...c, ...p });
            }
        })
    });
}

function prepareList(element, arr) {
    element.innerHTML = '';
    arr.forEach((v, k) => element.innerHTML += `
            <tr>
                <td class="column1">${k + 1}</td>
                <td class="column2">${v.name}</td>
                <td class="column3">${v.locality}</td>
                <td class="column4">${v.postal_code}</td>
                <td class="column5">${v.lat}</td>
                <td class="column6">${v.long}</td>
            </tr>
        `);
}


let cafes = [], places = [];
let tableBody = document.getElementById("table-wrapper").children[0].children[1];

async function fetchData() {
    try {
        cafes = (await fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json')
            .then(res => res.json())).cafes;

        places = (await fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json')
            .then(res => res.json())).places;
    } catch (e) {
        console.log(e.message);
    }
}

function main() {
    result = []
    combineResults(cafes, places, result);
    prepareList(tableBody, result);
}

function onChangeHandler(substring) {
    if (substring !== '') {
        result = []
        filteredCafes = cafes.filter(c => c.name.includes(substring));
        combineResults(filteredCafes, places, result);
        prepareList(tableBody, result);
    } else {
        main();
    }
}

fetchData().then(res => main());