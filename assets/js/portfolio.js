function openModal(card) {
    const cardImage = card.firstElementChild;
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');

    const cardTitle = card.parentNode.querySelector('.card-title').innerText;

    modalImage.src = cardImage.getAttribute('data-large');
    modalTitle.innerText = cardTitle;

    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}