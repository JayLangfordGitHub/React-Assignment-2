import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/home" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Card sx={{ maxWidth: 345, margin: '50px auto', backgroundColor: "#424242" }}>
            <CardContent>
                <Typography variant="h5" component="h1" sx={{ color: 'white', textAlign: 'center' }}>
                    Login Page
                </Typography>
                <Typography variant="subtitle1" component="h2" sx={{ color: 'white', textAlign: 'center' }}>
                    You must log in to view these pages!
                </Typography>
                <TextField
                    id="username"
                    label="User Name"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{ backgroundColor: '#f5f5f5' }}
                />
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ backgroundColor: '#f5f5f5' }}
                />
                {context.loginErr && (<Typography variant="body2" color="error" sx={{ textAlign: 'center', marginTop: '10px' }}>{context.loginErr}</Typography>)}
                <Button variant="contained" color="primary" onClick={handleLogin} sx={{ marginTop: '20px' }}>
                    Log in
                </Button>
                <Typography variant="subtitle2" component="h2" sx={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                    Not Registered? <Link to="/signup" style={{ color: 'white' }}>Sign Up!</Link>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LoginPage;