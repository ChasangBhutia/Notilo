import "./Footer.css";

const Footer = ()=>{
    const year =new Date().getFullYear();

    return(
        <footer>
            ©Notilo-{year} @Chasang Tsering Bhutia
        </footer>
    )
}

export default Footer;