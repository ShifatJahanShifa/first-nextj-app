const Dynamic = ({params}) => {
    return ( 
        <div>
            <p>dynamic page</p>
            <p>{params.id}</p>
        </div>
     );
}
 
export default Dynamic;