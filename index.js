// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

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


