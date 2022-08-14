const slider = document.getElementById('slider');

const canvas = document.getElementById('canvas');
const gridExtentButton = document.getElementById('gridExtent');
const gridClearButton = document.getElementById('clearMode');
const gridCancelButton = document.getElementById('cancelMode');
const gridChangeColorButton = document.getElementById('changeColor');
const rainbowModeButton = document.getElementById('rainbowMode');

let internalDimension = 16;
let color = 'black';
let i, k = 0;

let clicked = false;

slider.oninput = function() {
    let showZone = document.getElementById('sliderValue');
    showZone.textContent = `${slider.value} x ${slider.value}`;
    displayGrid(parseInt(slider.value), color);
}

function clearGrid(grid) {
    grid.innerHTML = '';
}

function displayGrid(dimension, color = 'black') {

    clearGrid(canvas);

    for(i = 0; i < dimension; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for(k = 0; k < dimension; k++)
        {
            let singleSquare = document.createElement('div');
            singleSquare.classList.add('singleSquare');
            singleSquare.style.width = `${canvas.offsetWidth / internalDimension}px`;
            singleSquare.style.height = `${canvas.offsetHeight / internalDimension}px`;

            singleSquare.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = color;
            });


            rowDiv.appendChild(singleSquare);
        }

        canvas.appendChild(rowDiv);
    }
}

displayGrid(internalDimension, color);



gridExtentButton.addEventListener('click', function(e) {
    let dimension = prompt('User, insert a dimension [Max 100]: ');

    if(dimension > 100)
        dimension = prompt('User, that\'s too large! Insert another dimension: ');

    internalDimension = parseInt(dimension);
    displayGrid(internalDimension, color);
});

gridClearButton.addEventListener('click', function(e) {
    displayGrid(internalDimension, color);
});

gridCancelButton.addEventListener('click', function(e) {
    const squares = document.getElementsByClassName('singleSquare');
    cancelColor = 'white';

    if(clicked == false) {
            
            for(let j = 0; j < squares.length; j++) {
                squares[j].removeEventListener('mouseover', function(e) {
                    e.target.style.backgroundColor = color;
                });

                squares[j].addEventListener('mouseover', function(e) {
                    e.target.style.backgroundColor = cancelColor;
                })
            }

            clicked = true;
    }

    else {
        for(let i = 0; i < squares.length; i++) {

            squares[i].removeEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = cancelColor;
            });

            squares[i].addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = color;
            });

            clicked = false;
        }
    }
});

gridChangeColorButton.addEventListener('click', function(e) {
    const squares = document.getElementsByClassName('singleSquare');
    let newColour = prompt('Insert a new colour');

    for(let j = 0; j < squares.length; j++) {
        squares[j].removeEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        });

        squares[j].addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = newColour;
        })
    }
});

rainbowModeButton.addEventListener('click', function(e) {

    
    const squares = document.getElementsByClassName('singleSquare');

    for(let j = 0; j < squares.length; j++) {
        squares[j].removeEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        });

        squares[j].addEventListener('mouseover', function(e) {
            let rainbowColours = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
            let newColour = rainbowColours[Math.floor(Math.random() * rainbowColours.length)];
            e.target.style.backgroundColor = newColour;
        })
    }

});