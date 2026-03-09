import Item from "./Item";

function PackingList() {
    return(
        <>
            <h1>Packing List</h1>
            <ul>
                <Item name="Water" isPacked={true}/>
                <Item name="Towels" isPacked={false}/>
                <Item name="Shoes" isPacked={false}/>
            </ul>
        </>
    );
}

export default PackingList;