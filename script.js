document.addEventListener('DOMContentLoaded', () => {
    const questionBoxes = document.querySelectorAll('.question__box');

    questionBoxes.forEach(questionBox => {
        const title = questionBox.querySelector('.title');

        title.addEventListener('click', () => {
            questionBox.classList.toggle('active');
        });
    });
});
