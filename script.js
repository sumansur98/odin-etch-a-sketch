
function renderGrid(size){
    for(let i=0;i<size*size;i++){
        const cellElement = document.createElement('div')
        cellElement.classList.add('cell');
        document.getElementById("gridDiv").append(cellElement);
    }
}


renderGrid(5);