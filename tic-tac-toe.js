function addSquares(board){
    for (let x =0; x < board.children.length; x++ ){
        board.children[x].className = 'square';
        
    }
}



window.addEventListener('DOMContentLoaded', (e) => {
    //Initialization
    let board = document.querySelector('#board'); 
    let isX = false;
    let gridArr = []
    
    addSquares(board);
    
    let squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.addEventListener('click', () =>{
            if(isX){
                square.innerHTML = 'O';
                isX = false
            }
            else{
                square.innerHTML = 'X'
                isX = true
            }
            gridArr = [...squares].map(square => square.innerHTML)
            console.log(gridArr)
        });
        square.addEventListener('mouseenter', e =>{
            square.classList.add('hover')
        })
        square.addEventListener('mouseleave', e =>{
            square.classList.remove('hover')
        })
    })

    squares.forEach(square => {
    })
});