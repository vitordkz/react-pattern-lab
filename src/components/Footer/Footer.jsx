// function Footer() {
//     return (
//         <footer>Made by Vitor.</footer>
//     );
// }

// export default Footer;

// function Footer(props) {
//     return (
//         <footer>{props.texto}</footer>
//     );
// }

// export default Footer;

function Footer({ children }) {
    return (
        <footer>
            {children}
        </footer>
    );
}

export default Footer;