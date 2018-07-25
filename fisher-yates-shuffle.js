const vowels = ['a', 'e', 'i', 'o', 'u'];

function shuffle(list) {
  for (let index = list.length; index; index--) {
    const randomIndex = Math.floor(Math.random() * index);
    const element = list[index - 1];
    list[index - 1] = list[randomIndex];
    list[randomIndex] = element;
  }
}

shuffle(vowels);
console.log(vowels);
