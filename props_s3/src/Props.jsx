function Student(props){

    return(

<div className="design">
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
    <p>Alive:{props.alive?"yes":"No"}</p>
</div>
    );

}

export default Student