import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { adduser, deleteuser, edituser } from "../../actions/index";




export default function Form() {

    const [Fname, setfname] = useState("");
    const [Lname, setlname] = useState("");
    const [Opname, setopname] = useState("");
    const [Radioname, setradioname] = useState("");
    const [editable, setEditable] = useState(false)

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const dispatch = useDispatch();
    const userform = useSelector(state => state.todoreducer.userform);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = userform.filter((value) => {
            return value.data.Fname.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };



    return (
        <div>

            <form>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" value={Fname} onChange={(e) => setfname(e.target.value)} /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" value={Lname} onChange={(e) => setlname(e.target.value)} /><br /><br />

                <label for="cars">Choose a car:</label>

                <select name="cars" id="cars" form="carform" value={Opname} onChange={(e) => setopname(e.target.value)}>
                    <option>Please select</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>

                <input type="radio" id="html" name="fav_language" value="HTML" onChange={(e) => setradioname(e.target.value)} />
                <label for="html">HTML</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" onChange={(e) => setradioname(e.target.value)} />
                <label for="css">CSS</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" onChange={(e) => setradioname(e.target.value)} />
                <label for="javascript">JavaScript</label>


                <input type="submit" value="Submit" onClick={(e) => {
                    e.preventDefault();
                    dispatch(adduser({

                        Fname,
                        Lname,
                        Opname,
                        Radioname
                    }))

                }} />
            </form>
            <input
                type="text"
                placeholder="Plese Search"
                value={wordEntered}
                onChange={handleFilter}
            />
            <button>Search</button>





            <table>
                <th>Name</th>
                <th>LName</th>
                <th>Car</th>
                <th>Radioname</th>









                {filteredData.length > 0 ? filteredData.map((user, key) => {
                    return (

                        <tbody key={user.id}>
                            <td>{user.data.Fname}</td>
                            <td>{user.data.Lname}</td>
                            <td>{user.data.Opname}</td>
                            <td>{user.data.Radioname}</td>


                            <td><button onClick={(e) => {


                                dispatch(edituser({
                                    ...user,
                                    Fname,
                                    Lname,
                                    Opname,
                                    Radioname
                                }))


                                if (editable) {
                                    setfname(user.data.Fname);
                                }
                                setEditable(!editable);
                            }}>{editable ? "Update" : "Edit"}
                            </button></td>




                            <td><button onClick={(e) => { dispatch(deleteuser(user.id)) }}>Delete</button></td>




                        </tbody>

                    );
                }
                )

                    : userform.map((user) => {
                        return (
                            <tbody>
                                <td>{user.data.Fname}</td>
                                <td>{user.data.Lname}</td>
                                <td>{user.data.Opname}</td>
                                <td>{user.data.Radioname}</td>
                                <td><button onClick={(e) => {


                                    dispatch(edituser({
                                        ...user,
                                        Fname,
                                        Lname,
                                        Opname,
                                        Radioname
                                    }))


                                    if (editable) {
                                        setfname(user.data.Fname);
                                    }
                                    setEditable(!editable);
                                }}>{editable ? "Update" : "Edit"}
                                </button></td>




                                <td><button onClick={(e) => { dispatch(deleteuser(user.id)) }}>Delete</button></td>


                            </tbody>
                        );
                    })

                }








            </table>


        </div>
    )
}
