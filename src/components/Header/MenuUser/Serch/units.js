import styled from "@emotion/styled";

const StyledSerch = styled.div`
    display: flex;
    align-items: center;
`;

const StyledInput = styled.input`
    background-color: lightgrey;
    border: 0px;
    height: 35px;
    width: 400px;
    font-size: 15px;
    border-radius: 15px;
    padding: 0 30px;

    & :active {
        border: 0px;
    }
`;
const SerchImg = styled.img`
    width: 20px;
    height: 20px;
    margin-left: -30px;
`;

export { StyledInput, StyledSerch, SerchImg };
