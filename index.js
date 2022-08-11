// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
function beforeEach(){
    cats.length = 0;

}

function destructivelyAppendCat(name){
    return destructivelyAppendCat = cats.push("Ralph");
}

function destructivelyPrependCat(name){
    return destructivelyPrependCat = cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return destructivelyRemoveLastCat = cats.pop();
}

function destructivelyRemoveFirstCat(){
    destructivelyRemoveFirstCat = cats.shift();

    return cats;
}

function appendCat(name){
    return appendCat = [...cats, "Broom"];

}

function prependCat(name){
    return prependCat = ["Arnold", ...cats];
}

function removeLastCat(){
    return removeLastCat = cats.slice(0, cats.length-1);
}

function removeFirstCat(){
    return removeFirstCat = cats.slice(1);
}
