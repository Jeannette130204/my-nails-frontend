const initialForm={
    description: "",
    material: "",
    url:"",
}

export default function AddNails(){
    return(
    <>
    <form>
        <label>Description: </label>
        <input type="text"/>
        <label>Material: </label>
        <input type="text"/>
        <label>URL: </label>
        <input type="text"/>

        
    </form>
    </>
    )
}