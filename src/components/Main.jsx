import styled from "styled-components";
import fondo from "../images/fondoAmarillo.png"

function Main() {
    return(
        <MainContainer>
            <BackgroundContainer><img src ={fondo} alt="ops"/></BackgroundContainer>
            <GridContainer>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div><HomeCardContainer>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id lacus nec est elementum porta non ut sapien. In vestibulum at leo ut eleifend. Nunc congue tellus fringilla ligula aliquam rhoncus. Vivamus ullamcorper a ante a tristique. Proin nisi lacus, aliquet at massa a, mollis gravida urna.</p>
                    </HomeCardContainer></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </GridContainer>
        </MainContainer>
    )
}

const HomeCardContainer=styled.div`
    display: grid;
    width: auto;
    height: 562px;
    right: 132px;
    top: 129px;

    background: rgba(247, 232, 226, 0.8);
    border: 1px solid rgba(180, 131, 117, 0.2);
    box-sizing: border-box;
    box-shadow: 2px 5px 4px rgba(180, 131, 117, 0.25);
    border-radius: 10px;

    h1{
        height: 74px;
        left: 51px;
        top: 117px;

        font-family: Italiana;
        font-style: normal;
        font-weight: normal;
        font-size: 60px;
        line-height: 71px;
        text-align: center;

        color: #B58372;

        -webkit-text-stroke: thin;
    }

    p{
        font-family: Italiana;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        padding: 20px;

        color: #B58372;
    }
    `;

const MainContainer = styled.div`


`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    position: absolute;
    left: 0px;
    top: 218px;

`;

const BackgroundContainer = styled.div`
    grid-area: main;
    position: absolute;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    left: 0px;
    top: 218px;  
    
    img{
        width: -webkit-fill-available;
        height: auto;
    }
`;

export default Main;