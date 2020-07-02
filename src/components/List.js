import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Card';

const List = (props) => {

    const listsOfCards = props.listsOfCards;
    const setListsOfCards = props.setListsOfCards;
    const listIndex = props.listIndex;


    const drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card-id');

        const card = document.getElementById(card_id);
        card.style.display= 'block';

        
            
        if(e.target.className=="card-content"){
            //e.target.parentElement.parentElement.appendChild(card);
            let cards = e.target.parentElement.parentElement;
            let position = e.target.offsetTop;
            //console.log(e.target);

            let heightStart = e.target.offsetTop-8;
            let heightEnd = e.target.offsetTop+e.target.offsetHeight+8;
            let newCardPlacement = (heightEnd+heightStart)/2 > e.clientY? "top":"bottom";     

            if(newCardPlacement =="top")
                cards.insertBefore(card,e.target.parentElement);
            else
                cards.insertBefore(card,e.target.parentElement.nextSibling);
        
        }
        else if(e.target.className=="card"){
            e.target.parentElement.appendChild(card);
            
        }else if(e.target.className=="board-list-card-conatiner")
            e.target.appendChild(card);
    }

    const dragOver = (e) => {
        e.preventDefault();
        //console.log(e)

    }



    return (
        <div className="board-list">
            <header className="board-list-header">{props.listName}</header>
            <div className="board-list-card-conatiner" 
            id={`list-${props.listId}`}
            onDrop={drop}
            onDragOver={dragOver}
            >
            {props.children}
            </div>
            <div className="board-list-bottom">
                <span className="board-list-bottom-add" onClick={()=>props.addCardToList(setListsOfCards,listsOfCards,listIndex)}>+ Add card</span>
            </div>
        </div>
    );
}



export default List;
