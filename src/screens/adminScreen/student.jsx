import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { getData } from '../../config/firebasemethod';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Students() {
    let [module, setModule] = useState({});
    let [stdData, setStdData] = useState([])
    let sendStdData = () => {
        console.log(module)

        getData(`studentsRecord/`)
            .then((res) => {
                setStdData(res)
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }
    useEffect(() => { sendStdData() }, [])
    return (
        <>
            <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" }}}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>Students Record</Typography>
                    </Grid>


                    <Grid>

                        <TableContainer component={Paper}>
                            <Table sx={{minWidth:650}} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Full Name</TableCell>
                                        <TableCell >Father</TableCell>
                                        <TableCell >Contact</TableCell>
                                        <TableCell >Course</TableCell>
                                        <TableCell >Section</TableCell>
                                        <TableCell >CNIC</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {stdData.length > 0 ? stdData.map((row,i) => (
                                        <TableRow
                                            key={i}
                                            
                                        >
                                            <TableCell component="th" scope="row">
                                                {`${row.Student?.firstName} ${row.Student?.lastName}`}
                                            </TableCell>
                                            <TableCell >{row.Student?.fatherName}</TableCell>
                                            <TableCell >{row.Student?.contact}</TableCell>
                                            <TableCell >{row.Student?.course}</TableCell>
                                            <TableCell >{row.Student?.section}</TableCell>
                                            <TableCell >{row.Student?.cnic}</TableCell>
                                        </TableRow>
                                    )) :(
                                        <TableRow>
                                            <TableCell ><CircularProgress /></TableCell>
                                            <TableCell ><CircularProgress /></TableCell>
                                            <TableCell ><CircularProgress /></TableCell>
                                            <TableCell ><CircularProgress /></TableCell>
                                            <TableCell ><CircularProgress /></TableCell>
                                            <TableCell ><CircularProgress /></TableCell>
                                        </TableRow>

                                    )

                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </Container></>
    )
}