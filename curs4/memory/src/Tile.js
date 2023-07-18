import React, {useState} from "react";



function clickedTile(index, setVisible){
    console.log ('clicked Tile with index' + index);
    setVisible("visible");
}

function Tile(props) {
    let [visible, setVisible] = useState('invisible');
    
    
  return (
    <div className="tile rounded-md" onClick={(event)=>clickedTile(props.index, setVisible)}>

      <img
        src={
          "https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-" +
          props.tile +
          ".png"} 
          alt={props.altText}
          data-culoare={props.culoare}
          className={visible}
      />
    </div>
  );
}
export default Tile;
