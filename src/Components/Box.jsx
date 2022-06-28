import './Box.css'
export const Box=(props)=>{
   
    const className=`${props.className} box`
    return(
    <div className={className} onClick={props.onClick}>{props.value}</div>)
}