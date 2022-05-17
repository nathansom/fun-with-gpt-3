export type FooterProps = {
    text:string;
}

const Footer = ({ text }: FooterProps) => {
    return (
        <footer id="footer" className="footer">
            <p>{text}</p>
        </footer>
    );
}

export default Footer;