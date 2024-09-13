const joke = document.getElementById('joke-text');
let b;
regen()
function regen() {
    const api = 'https://official-joke-api.appspot.com/random_joke'
    const url = fetch(api)
    data = url.then((res) => res.json()).then((data) => b = data);
}
console.log(data)
function opt() {
    regen();
    joke.innerHTML = `<p id="setup"> ${b.setup}</p> </br> <p id="punchline" >-${b.punchline}</p>`
}