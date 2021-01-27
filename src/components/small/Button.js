const Button = (props) => {
    return <button onClick={props.onClick} style={{backgroundColor: props.color}} className='btn'>{props.title}</button>
}

export default Button
