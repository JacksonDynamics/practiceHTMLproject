const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value) => {
        resultsList.append(document.createElement('br'))
        resultsList.append(`${value}`)
})

const detailsList = document.getElementById('details')
console.log(detailsList)
        detailsList.append(document.createElement('h2'))
        detailsList.append(`Hello World`)