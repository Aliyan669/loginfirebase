import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, Grid,  Typography } from '@mui/material';
import { getData } from '../../config/firebasemethod';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
export default function Students() {
    let [main, setmain] = useState({});
    let [Data, setData] = useState([]);
    
    let sendData = () => {
        // console.log(main)
        getData('students')
            .then((res) => {
                setData(res)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    useEffect(() => { 
        sendData() 
    }, [])
    return (
        <div className='App'>
            <header className="App-header">
            <div className="student">
            <div className="why">
          <h1 className="couhead"> Student Data </h1>
          </div>
          <Box className="register2">
                <Grid container spacing={2}>
          
                    <Grid>
                        <TableContainer className='table' component={Paper}>
                            <Table sx={{minWidth:650}} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Full Name</TableCell>
                                        <TableCell >Father Name</TableCell>
                                        <TableCell >Contact</TableCell>
                                        <TableCell >Course</TableCell>
                                        <TableCell >Section</TableCell>
                                        <TableCell >CNIC</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Data.length > 0 ? Data.map((e,i) => (
                                        <TableRow key={i}>
                                            <TableCell>
                                                {`${e.firstName} ${e.lastName}`}
                                            </TableCell>
                                            <TableCell >{e.fatherName}</TableCell>
                                            <TableCell >{e.contact}</TableCell>

                                            <TableCell >{e.course}</TableCell>

                                            <TableCell >{e.section}</TableCell>
                                            <TableCell >{e.cnic}</TableCell>
                                        </TableRow>
                                    )) :(
                                        <TableRow>
                                            <TableCell ></TableCell>
                                            <TableCell ></TableCell>
                                            <TableCell ></TableCell>
                                            <TableCell ></TableCell>
                                            <TableCell ></TableCell>
                                            <TableCell ></TableCell>
                                        </TableRow>

                                    )
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
                </Box>
                </div>
                </header>
           </div>
    )
}