const canvas = document.getElementById('canvas');
const internalDimension = 16;
let i, k = 0;


for(i = 0; i < internalDimension; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for(k = 0; k < internalDimension; k++)
    {
        let singleSquare = document.createElement('div');
        singleSquare.classList.add('singleSquare');

        singleSquare.addEventListener('mouseover', function(e) {
             e.target.style.backgroundColor = 'black';
        });


        rowDiv.appendChild(singleSquare);
    }

    canvas.appendChild(rowDiv);
}

