/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal(){
    const button = document.querySelector('#buttonModal');
    const modal = document.querySelector('.modal__controller');

    button.addEventListener('click', function(e){
        modal.showModal();
        closeModal();
    });
}

function closeModal() {
    const button = document.querySelector('#buttonClose');
    const modal = document.querySelector('.modal__controller'); 

    button.addEventListener('click', function(e){
        modal.close();
    });
}

handleModal();