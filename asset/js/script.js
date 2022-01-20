// Get the modal
const modal = document.getElementById("my-modal");
//Button that opens modal
const closeModalBtn = document.querySelector('.close-modal');
const successModal = document.querySelector('.success-modal');
const closeSuccesModal = document.querySelector('.close__success-modal');
const backProject = document.querySelector('.back-project__container');

document.querySelectorAll('#select-two, #select-one').forEach(function(button) {
    button.addEventListener('click', function(e) {
    modal.style.display = 'flex';
    document.querySelector('main').style.opacity = '0.3';

    })
  });

  closeModalBtn.addEventListener('click', function(){
    modal.style.display = 'none';
    document.querySelector('main').style.opacity = '1';
  })

  document.querySelectorAll('#contd-one, #contd-two').forEach(function(button) {
    button.addEventListener('click', function(e) {
    successModal.style.display = 'flex';
    modal.style.display = 'none';
    document.querySelector('main').style.opacity = '0.3';
    backProject.style.display = 'none';


    })
  });

  closeSuccesModal.addEventListener('click', () =>{
    successModal.style.display = 'none';
    document.querySelector('main').style.opacity = '1';
    backProject.style.display = 'block';
  });