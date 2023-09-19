
function renderGrid(size){
    let width = 800/size-2;
    let height = width;

    for(let i=0;i<size*size;i++){
        const cellElement = document.createElement('div')
        cellElement.classList.add('cell');
        cellElement.style.height = height+"px";
        cellElement.style.width = width+"px";
        document.getElementById("gridDiv").append(cellElement);
    }

    attachHoverEffect();
}

function attachHoverEffect(){
    document.querySelectorAll(".cell").forEach((elem)=>{
        elem.addEventListener("mouseover", (e)=>{
            elem.style.backgroundColor = "black";
            console.log("hello")
        })
    })
}

renderGrid(20);

document.querySelector("#btnNewGrid").addEventListener("click",()=>{
    const gridSize = Number(prompt("Enter Grid Size"));
    document.getElementById("gridDiv").innerHTML = '';
    renderGrid(gridSize);
})