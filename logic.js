const slider = document.getElementById('slider');

const canvas = document.getElementById('canvas');
const gridClearButton = document.getElementById('clearMode');
const gridCancelButton = document.getElementById('cancelMode');
const gridChangeColorButton = document.getElementById('changeColor');
const colourPicker = document.getElementById('colorPicker');
const rainbowModeButton = document.getElementById('rainbowMode');

let internalDimension = 16;
let color = 'black';
let i, k = 0;


let clicked = false;

slider.oninput = function() {
    let showZone = document.getElementById('sliderValue');
    showZone.textContent = `${slider.value} x ${slider.value}`;
    internalDimension = parseInt(slider.value);
    gridCancelButton.classList.remove('active');

    displayGrid(internalDimension, color);
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
            singleSquare.style.width = `${canvas.offsetWidth / dimension}px`;
            singleSquare.style.height = `${canvas.offsetHeight / dimension}px`;

            singleSquare.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = color;
            });

            rowDiv.appendChild(singleSquare);
        }

        canvas.appendChild(rowDiv);
    }
}

displayGrid(internalDimension, color);



gridClearButton.addEventListener('click', function(e) {
    gridCancelButton.classList.remove('active');
    displayGrid(internalDimension, color);
});

gridCancelButton.addEventListener('click', function(e) {
    const squares = document.getElementsByClassName('singleSquare');
    cancelColor = 'white';

    if(clicked == false) {
            gridCancelButton.classList.add('active');

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
        gridCancelButton.classList.remove('active');

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

colourPicker.addEventListener('input', function(e) {
    gridCancelButton.classList.remove('active');

    const squares = document.getElementsByClassName('singleSquare');
    let newColour = colourPicker.value;
    color = newColour;
    
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
    gridCancelButton.classList.remove('active');

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