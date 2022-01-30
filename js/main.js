function openModal(modalId) {
  let modal = document.getElementById(modalId);

  if (typeof modal == 'undefined' || modal === null)
    return;

  modal.style.display = 'Block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);

  if (typeof modal == 'undefined' || modal === null)
    return;

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}