import React from 'react';

const Footer = () => (
<footer style={{
    background: '#000000',
    color: '#FFFFFF',
    width: '100%', 
    position: 'fixed', 
    bottom: '0', 
    textAlign: 'center',  
    margin: "auto"}}>
    <a style={{ color: "yellow" }} onClick={(event) => window.location = "/admin/login"}>Admin Login | </a>
    <a style={{ color: "yellow" }} onClick={(event) => window.location = "/admin/home"}>Admin Home | </a>
    <a style={{ color: "yellow" }} onClick={(event) => window.location = "/admin/banner"}>Banner</a>

    <br />
    © 2020 Advanced Software Development Spring Group 3 
</footer>
);

export default Footer;