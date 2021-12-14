import logo from "../images/logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

function NavBar() {
    return(
    <NavBarContainer>
        <LogoContainer><Link to="/home"><img src={logo} alt="logo"/></Link></LogoContainer>
        <LinkBar>
            <div> <Link to="/aboutUs ">Sobre nosotras</Link> </div>
            <div> <Link to="/sizes ">Tallas</Link> </div>
            <div> <Link to="/shop ">Comprar</Link> </div>
            <div> <Link to="/shoppingCart ">Carrito</Link></div>
        </LinkBar>
    </NavBarContainer>
     
    )
}

const NavBarContainer = styled.div`
    position: absolute;
    width: -webkit-fill-available;
    height: 218px;
    left: 0px;
    top: 0px;

    background: rgba(244, 219, 212, 1);
    border: 1px solid rgba(180, 131, 117, 0.2);
    box-sizing: border-box;
    box-shadow: 2px 5px 4px rgba(180, 131, 117, 0.25);
    grid-area: header;
    grid-template-columns: 1fr 2fr;
    
    a{
        color: rgba(180, 131, 117, 1);
        text-decoration: auto;
        font-family: 'Italiana', serif;
        Stroke: Solid rgba(117, 86, 76, 0.5);
        -webkit-text-stroke: thin;
    }
    
`;

const LogoContainer = styled.div`
    img{    
    height: 182px;}
    position: absolute;
    width: 364px;
    height: 182px;
    left: 70px;
    top: 18px;
    
`;

const LinkBar = styled.div`
    position: absolute;
    width: 922px;
    height: 128px;
    right: 18px;
    top: 45px;

    font-size: 30px;

    display: flex;
    align-items: end;

    div{
        padding: 32px
    } 

`;

export default NavBar;
