function openModal() {
    const overlay = document.querySelector('.black-overlay');
    const modal = document.querySelector('.modal');

    overlay.classList.add('active');
    modal.classList.add('active');
}

function closeModal() {
    const overlay = document.querySelector('.black-overlay');
    const modal = document.querySelector('.modal');

    overlay.classList.remove('active');
    modal.classList.remove('active');

    clearModal();
}

function clearModal() {
    const wrapper = document.querySelector('.modal .wrapper');
    wrapper.innerHTML = '';
}

function renderModalContent(HTMLContent) {
    const wrapper = document.querySelector('.modal .wrapper');
    wrapper.innerHTML = HTMLContent;
}

function modal_loadListeners() {
    const overlay = document.querySelector('.black-overlay');

    overlay.addEventListener('click', closeModal);
}

modal_loadListeners();
