const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let intervalId

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i < 6; i++){
        color += hex[Math.floor(Math.random()* 16)]
    }
    return color
}

const changeColor = () => {
    document.body.style.backgroundColor = randomColor()
}

start.addEventListener('click', () => {
    if(!intervalId){
        intervalId = setInterval(()=> {
        changeColor()
        },1000)
    }
})

stop.addEventListener('click',()=> {
    clearInterval(intervalId)
    intervalId = null
})