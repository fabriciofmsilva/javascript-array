const vowels = ['a', 'e', 'i', 'o', 'u'];

function shuffle(list) {
  for (let index = list.length; index; index--) {
    const randomIndex = Math.floor(Math.random() * index);
    const element = list[index - 1];
    [list[index - 1], list[randomIndex]] = [list[randomIndex], list[index - 1]];
  }
}

shuffle(vowels);
console.log(vowels);
