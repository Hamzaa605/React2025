function Header()
{
    let name="XYZ";
    let student=
    {
        id:101,
        name:"Amit"
    }
    return(
        <div>
             <h1>Header Component {name}</h1>
             <p>Student id:{student.id}</p>
             <p>Student Name:{student.name}</p>
        </div>
       
    );
}
export default Header;