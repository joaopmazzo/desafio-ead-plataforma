modal.addEventListener('click', function (e) {
  if (e.target == this)
    closeModal();
})

function openModal() {
  $('.modal-box').css('display', 'flex');
}

function closeModal() {
  $('.modal-box').css('display', 'none');
}