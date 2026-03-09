function Item({name="Bags", isPacked=true}) {
    return (
        <li>
            {name} {isPacked && '✅'}
        </li>
    )
}

export default Item;