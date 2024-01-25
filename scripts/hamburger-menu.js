document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    hamButton.addEventListener('click', () => {
        hamButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });
});