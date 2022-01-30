let modal = document.getElementById('dv-modal');

modal.addEventListener('click', function (e) {
  if (e.target == document.getElementById('dv-modal'))
    closeModal();
})

function openModal() {
  $('.modal-box').css('display', 'flex');
}

function closeModal() {
  $('.modal-box').css('display', 'none');
}

function addCupom() {
  let nomeCupom = $('#cupom').val();
  $('#nome-cupom').text(nomeCupom);

  $('.dv-cupom').css('display', 'flex');
  $('#dv-cupom').css('display', 'none');
}

function fechaMsgCupom() {
  $('.dv-cupom').css('display', 'none');
}