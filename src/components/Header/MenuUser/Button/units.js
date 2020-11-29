import styled from "@emotion/styled";

const StyledButton = styled.div`
    width: 70px;
    height: 35px;
    border: 1px solid grey;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-bottom: 4px;
    user-select: none;

    &:hover {
        background: linear-gradient(to top, #ff0000 33%, #0000ff 73%, #ffffff 33%);
        border-bottom: 4px solid #cc6617;
        color: white;
        font-weight: 600;
    }
`;

export default StyledButton;
