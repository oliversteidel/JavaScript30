/*
1. get data from JSON
2. push data to array
3. filter array for search term of input (regex)
4. create suggestion (regex, keyup-event)
5.show data in list
*/









const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var cities = [];
//call fetch() to get data; then parse it to json; then push it to new array that we can filter it
fetch(endpoint).then(response => response.json())
    .then(data => cities.push(...data));

console.log(cities);

const makeSuggest = () => {
    var input = document.querySelector('input').value;

    var regex = new RegExp(input, "ig");
    console.log(input);

    var result = cities.filter(place => place.city.match(regex));
    console.log(result);
    return result;

}

const showList = () => {
    const ul = document.getElementById('list');
    resultList = makeSuggest().map(item => {
        return item.city;
    });
    console.log(resultList);
    ul.innerHTML = '';
    resultList.forEach(el => {
        let li = document.createElement('li');        
        li.innerHTML += el;
        ul.appendChild(li);
        
    });

} 



document.querySelector('input').addEventListener('keyup', showList);


