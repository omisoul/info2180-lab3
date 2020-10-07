function addSquares(board){
    for (let x =0; x < board.children.length; x++ ){
        board.children[x].className = 'square';
        
    }
}

function hasWinner(arr){
    matches = [[0, 1, 2], [3, 4, 5], 
               [6, 7, 8], [0, 3, 6], 
               [1, 4, 7], [2, 5, 8], 
               [0, 4, 8], [2, 4, 6]]

    for(let i of matches){
        // console.log(i);
        if (arr[i[0]] == 'X' && arr[i[1]] == 'X' && arr[i[2]] == 'X'){
            return 'X';
        }
        if (arr[i[0]] == 'O' && arr[i[1]] == 'O' && arr[i[2]] == 'O'){
            return 'O';
        }
    }
    return 'none';
}


window.addEventListener('DOMContentLoaded', (e) => {
    //Initialization
    let board = document.querySelector('#board'); 
    let status = document.querySelector('#status');
    let btn = document.querySelector('.btn');
    let isX = false;
    let gridArr = []
    
    addSquares(board);
    
    let squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.addEventListener('click', () =>{
            if(isX && square.textContent == ''){
                square.textContent = 'O';
                isX = false
            }
            else if(!isX && square.textContent == ''){
                square.textContent = 'X'
                isX = true
            }
            gridArr = [...squares].map(square => square.textContent)
            
            if(hasWinner(gridArr) == 'X'){
                status.classList.add('you-won');
                status.textContent = "Congratulations! X is the Winner!";
            }
            if(hasWinner(gridArr) == 'O'){
                status.classList.add('you-won');
                status.textContent = "Congratulations! O is the Winner!";
            }
            

        });

        // Adds hover style to the square on mouse enter
        square.addEventListener('mouseenter', e =>{
            square.classList.add('hover')
        })

        // Removes hover style from the square on mouse leave
        square.addEventListener('mouseleave', e =>{
            square.classList.remove('hover')
        })
    })

    //Reset Game
    btn.addEventListener('click', e =>{
        squares.forEach(square => square.textContent = '')
        isX = false;
        status.classList.remove('you-won');
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
    })
});