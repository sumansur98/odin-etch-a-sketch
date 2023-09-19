
function renderGrid(size){
    let width = Math.floor(900/size)-2;
    let height = width;

    for(let i=0;i<size*size;i++){
        const cellElement = document.createElement('div')
        cellElement.classList.add('cell');
        cellElement.style.height = height+"px";
        cellElement.style.width = width+"px";
        document.getElementById("gridDiv").append(cellElement);
    }
}


renderGrid(10);