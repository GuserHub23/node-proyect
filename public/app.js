console.log('hola desde el front end')

document.addEventListener('click', e=> {
    if (e.target.dataset.short) {
        const url = `http://localhost:5000/${e.target.dataset.short}`;

        navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log('texto copiado en portapapeles...');
            })
            .catch(error => {
                console.log('Algo salio mal', error);
            })
    }
})







