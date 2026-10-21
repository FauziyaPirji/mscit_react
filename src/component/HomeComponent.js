import react from 'react';

const HomeComponent = (props) => {
    return(
        <>
            <h1>Home Component - {props.name}</h1>

            <table border={2} align='center'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {
                    props.studentData.map((data,index)=> {
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
        </>
    )
}
export default HomeComponent