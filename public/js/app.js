const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const weather = async (address) => {
    let data = await fetch(`/weather?address=${address}`)
    data = await data.json()
    
    if(data.error){
        messageOne.textContent = data.error
    }else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    }
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = search.value
    messageOne.textContent = ''
    messageTwo.textContent = ''
    weather(address)
})