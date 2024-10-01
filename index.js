// Write your solution here!

// Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Function
function destructivelyAppendCat(cat) {
    cats.push(cat);
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function  destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-destructive functions
function appendCat(name){
    return[...cats, name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    return cats.slice(0,cats.length -1)
}

function removeFirstCat(){
    return cats.slice(1)
}

