let x = 16;
let gridContainer = document.querySelector('#gridContainer');


//Create the grid
function createGrid() {
    for (let  i= 0; i < x * x; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
       
        gridContainer.appendChild(gridBox);
    
        
        const gridBoxes = document.querySelectorAll('.gridBox') [i];
            gridBoxes.style.width = `${600/x}px`;
            gridBoxes.style.height = `${600/x}px`;

            gridBoxes.addEventListener('mouseover', function (e) {
                this.style.background = 'rgb(60, 86, 97)';
            })
    };
};

createGrid();


//Create reset button
let sketchControls = document.querySelector('#sketchControls');
let resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = 'RESET';
sketchControls.appendChild(resetButton);

//reset button event
resetButton.addEventListener('click', function (e) {
    if (confirm('are you sure?')) {

        while(gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        createGrid();
    }
});


//Create resize button
let resizeButton = document.createElement('button');
resizeButton.classList.add('resizeButton');
resizeButton.textContent = 'RESIZE GRID';
sketchControls.appendChild(resizeButton);

//resize button event
resizeButton.addEventListener('click', function (e) {
    gridContainer.innerHTML = '';
    x = parseInt(prompt('how many grid squares per side?'))
    createGrid();
})




