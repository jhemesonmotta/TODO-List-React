import Button from "../small/Button"

const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button
                title={props.buttonTitle}
                onClick={props.onAdd}
                color={props.buttonColor}
                ></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
