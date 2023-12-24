import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SignUpPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const handleRegister = async () => {
        const success =  context.register(userName, password);
        if (success === true) {
            setRegistered(true);
        }
    };

    if (registered) {
        return <Navigate to="/login" />;
    }

    return (
        <Card sx={{ maxWidth: 345, margin: '50px auto', backgroundColor: "#424242" }}>
            <CardContent>
                <Typography variant="h5" component="h1" sx={{ color: 'white', textAlign: 'center' }}>
                    SignUp Page
                </Typography>
                <Typography variant="subtitle1" component="h2" sx={{ color: 'white', textAlign: 'center' }}>
                    You must register a username and password to log in
                </Typography>
                <TextField
                    value={userName}
                    label="User Name"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{ backgroundColor: '#f5f5f5' }}
                />
                <TextField
                    value={password}
                    type="password"
                    label="Password"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ backgroundColor: '#f5f5f5' }}
                />
                <TextField
                    value={passwordAgain}
                    type="password"
                    label="Password Again"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    sx={{ backgroundColor: '#f5f5f5' }}
                />
                <Button variant="contained" color="primary" onClick={handleRegister} sx={{ marginTop: '20px' }}>
                    Register
                </Button>
                {context.authErr && (<Typography variant="body2" color="error" sx={{ textAlign: 'center', marginTop: '10px' }}>{context.authErr}</Typography>)}
            </CardContent>
        </Card>
    );
};

export default SignUpPage;