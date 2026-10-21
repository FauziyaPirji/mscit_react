import '../App.css';
import HomeComponent from './HomeComponent';
import FormComponent from './FormComponent';
import FormLocalStorage from './FormLocalStorage';

function Example() {
  const name = "Fauziya"

  const studentData = [
    {id:1, name:"Fauziya", email:"f@gmail.com"},
    {id:2, name:"Darshan", email:"d@gmail.com"},
    {id:3, name:"Devanshi", email:"d@gmail.com"},
    {id:4, name:"Khushi", email:"k@gmail.com"}
  ]

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>Hello World123</h1>
      <h1>Name: {name}</h1>

      <table border={2} align='center'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {
          studentData.map((data,index)=> {
            return(
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            )
          })
        }
      </table>
      <hr/>
      <HomeComponent name={name} studentData={studentData} />
      <FormComponent />
      <FormLocalStorage />
    </div>
  );
}

export default Example;
