

import React from "react";
import "../section/_section.styles.scss";


const SectionBlocks = ({Icon, title, color, selected}) => { 

    return (

        <div className ={`sectionBlock ${selected && "sectionBlock_selected"}`}  
        
        style={{

            borderBottom: ` 3px solid ${color}`,
            color: `${selected && color}`,
        }}>

          

            <Icon/>
            <h4>{title}</h4>

        </div>
    )
}

export default SectionBlocks;
