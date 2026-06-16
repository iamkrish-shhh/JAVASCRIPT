const time = document.getElementById('clock')

setInterval( ()=> {
    let date = new Date()
    time.innerText = date.toLocaleTimeString();
},1000)
