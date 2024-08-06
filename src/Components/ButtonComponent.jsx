

const  ButtonComponent = (props)  => {
// eslint-disable-next-line react/prop-types
const { text, type, bg, color, onClick, disabled} = props;
    return(
        <button
        disabled={disabled}
        style={{ background: bg, color: color }}
        onClick={onClick}>
        {text}
        {type}
       </button>
    );

};
   
    


export default ButtonComponent;