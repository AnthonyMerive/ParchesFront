import React from 'react';
import { useSelector } from 'react-redux';
import Typography from "@mui/material/Typography";
import ManoIzquierda from '../../Assents/Mano1.png'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton'

const VerPerfil = () => {

    const auth = useSelector(state=>state.auth)

    console.log(auth);


  return (  <div>
    <div><Typography variant='h3' color='primary'>Perfíl</Typography></div>
    <img style={{width:"80px",margin:"20px"}} src={ManoIzquierda}></img>
    <div style={{margin:"10px"}}>
        <Typography variant='h5' color='primary' >Correo</Typography>
        {auth.email && <Typography variant='h7' >{auth.email}</Typography>}
    </div>
    <div style={{margin:"10px"}}>
        <Typography variant='h5' color='primary'>Nombre</Typography>
        {auth.nombres && <Typography variant='h7'>{auth.nombres}</Typography>}
        <IconButton color='primary'><ModeEditIcon/></IconButton> 
        </div>
    </div>
    )
};

export default VerPerfil;
