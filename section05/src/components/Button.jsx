const Button = ({text,color})=>{
    console.log(text);
    return <button
        onClick={()=>{
            console.log(text);
        }}
        >
        {text}</button>;   
}


export default Button;