const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value) => {
        resultsList.append(document.createElement('br'))
        resultsList.append(`${value}`)
})

document.getElementById('projectNo').append(`Hello World`)
document.getElementById('projectAdd').append(`Hello World`)
document.getElementById('start').append(`Hello World`)
document.getElementById('end').append(`Hello World`)
document.getElementById('budget').append(`Hello World`)