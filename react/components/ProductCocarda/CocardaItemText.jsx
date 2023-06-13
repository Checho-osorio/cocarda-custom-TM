import React from 'react'
import searchCollection from '../../utils/searchCollection'

import Styles from './StylesCocarda.css'
import ValidateActive from '../../utils/ValidateActive'


const CocardaItemText = ({collection, tipoCocarda: {tabSelect}, anchoFlag, marginTop = 0, flagProgramable, initialDate, finalDate}) => {

  const searchCluster = searchCollection(collection)
  if (searchCluster === false) return <></>

  const {
    colorBorde = "#000",
    colorFondo = "#000",
    colorTexto = "#fff",
    tamanoTexto = "14px",
    textoCocarda
  }  = tabSelect

  const styles = {
    position: {
      minWidth:  anchoFlag ? anchoFlag : '60px',
      fontSize: tamanoTexto,
      color: colorTexto,
      background: colorFondo,
      borderColor: colorBorde,
      marginTop: marginTop,
    }
  }


  if (flagProgramable == true ) {
    const dateValidation =   ValidateActive(initialDate,finalDate)
    console.log('checho dateValidation', dateValidation);
    if(dateValidation == false ) return <></>
  }


  return (
     <div style={ styles.position } className={Styles.ContentTextFlag}>
      { textoCocarda }
    </div>
  )
}

export default CocardaItemText
