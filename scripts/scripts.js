const happyText = document.querySelector('.name--text');
const firstName = document.querySelector('.name--firstname');
const lastName = document.querySelector('.name--lastname');

const submitBtn = document.querySelector('.name--submit').addEventListener('click', () => {
  const happyTextArr = [
    `Hey there, ${firstName.value} ${lastName.value}. You rock, don't ever change 😄`,
    `${firstName.value} ${lastName.value}, you so got this 💪`,
    `Don't quit ${firstName.value}, you can totally do this.`,
    `Hooraaaaaaaay for ${firstName.value} 😃`,
    `Be Happy ${firstName.value}; do what you love 🤩`,
  ];
  happyText.textContent = happyTextArr[Math.floor(Math.random() * happyTextArr.length)];
});
