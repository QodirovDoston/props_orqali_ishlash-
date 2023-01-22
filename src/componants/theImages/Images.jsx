import React from 'react'

export const Images = (props) => {
    console.log(props);
const {url, width, heigth, className, ...rest} = props;
  return(
    <div>
        <img src={require(`../../img/${url}.png`)} alt="" width={width} height={heigth} className={className} {...rest}/>
    </div>
   )
  }
  export default Images;
