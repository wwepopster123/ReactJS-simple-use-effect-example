export const Menu = (props) => {
    return (
        <div onClick={props.incrementCardClick} className="card">
            <div>Menu</div>
            <div>This is menu showing for your, if you clicked to show button</div>
            <div>Click me!!</div>
        </div>
    )
}