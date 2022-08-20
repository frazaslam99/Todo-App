import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {

    const [inputtitle, setinputtitle] = useState('');
    const [inputtext, setinputtext] = useState('');

    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputtitle && !inputtext) {
            alert('plzz fill data');
        } else if (inputtitle &&inputtext && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputtitle }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);

            setinputtitle('');

            setIsEditItem(null);
        } else {
            const allinputtitle = { id: new Date().getTime().toString(), name: inputtitle,para: inputtext  }
            // const allinputtext = { id: new Date().getHours.toString(), para: inputtext }

            setItems([...items, allinputtitle]);
            setinputtitle('')
            setinputtext("")
           
        }
    }
   
    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);

        setToggleSubmit(false);

        setinputtitle(newEditItem.name);
        setinputtext(newEditItem.para)

        setIsEditItem(id);

    }
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ backgroundColor: "purple" }}>
                <Grid item xs={12}>
                    <div>
                        <figure>
                            <figcaption>Add Your List Here ✌</figcaption>
                        </figure>

                    </div>
                </Grid>

                <Grid item xs={12} style={{ width: "100%", backgroundColor: "purple", dispalay: "flex", justifyContent: "center", textAlign: "center", margin: 0, padding: 0 }}>
                    <div>
                        <input type="text" placeholder="✍ Add Title..."
                            value={inputtitle}
                            onChange={(e) => setinputtitle(e.target.value)}
                        />
                        {
                           toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                <i  style={{color:"black"}}className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        }

                    </div>
                </Grid>

                <Grid item xs={12} style={{ backgroundColor: "purple", dispalay: "flex", justifyContent: "center", textAlign: "center", margin: 0, padding: 0, paddingTop: "10px" }}>
                    <div>
                        <textarea rows="4" cols="100" type="text" placeholder="✍ Add Text..."
                            value={inputtext}
                            onChange={(e) => setinputtext(e.target.value)}
                        >

                        </textarea>

                        {/* {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                                <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        } */}

                    </div>
                </Grid>

                <Grid item xs={12} container>

                    {
                        items.map((elem) => {
                            return (
                                <Grid item xs={6} md={4} key={elem.id}>

                                        <h3>{elem.name}</h3>
                                        <h3>{elem.para}</h3>

                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                  

                                </Grid>
                            )
                        })
                    }

                </Grid>

            </Grid>
        </Box>
    );
}
