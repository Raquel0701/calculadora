import React from 'react'

export const Bloque = ({name,lastName, clase}) => {
    return (
        <div className={clase}>
            <div className="atributo1">
            
                <h2 className="texto"> Name: {name}</h2>
            </div>
            <div className="atributo1">
                
                <h2 className="texto"> Last Name: {lastName}</h2>
            </div>

        </div>
    )
}

//props = properties
/** 
//rfc componente funcionales
import React from 'react'

export default function Bloque() {
    return (
        <div>
            
        </div>
    )
}
//rafc , function arrow
import React from 'react'

export const Bloque = () => {
    return (
        <div>
            
        </div>
    )
}


*/