const vowels = ['a', 'e', 'i', 'o', 'u'];

function shuffle(list) {
  let index = list.length;

  while (index) {
    const randomIndex = Math.floor(Math.random() * index--);
    [list[index], list[randomIndex]] = [list[randomIndex], list[index]];
  }
}

shuffle(vowels);
console.log(vowels);
