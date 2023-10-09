// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function prependCat(name) {
  const newCats = [...cats]; // Create a new array to leave the original unchanged
  newCats.unshift(name);
  return newCats;
}

function removeLastCat() {
  const newCats = [...cats]; // Create a new array to leave the original unchanged
  newCats.pop();
  return newCats;
}

function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function removeFirstCat() {
    if (cats.length > 0) {
      return cats.slice(1);
    } else {
      return [];
    }
  }

  function appendCat(name) {
    return [...cats, name];
}


