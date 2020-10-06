function addSquares(board){
    for (let x =0; x < board.children.length; x++ ){
        board.children[x].className = 'square';
        
    }
}

window.addEventListener('DOMContentLoaded', (e) => {
    //Initialization
    let board = document.querySelector('#board'); 
    addSquares(board);
    
});