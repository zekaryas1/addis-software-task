import styled from "styled-components";

export const Button = styled.button<{ danger: boolean, ml: number }>`
  padding: 8px;
  background-color: transparent;
  color: white;
  border-radius: 4px;
  margin-left: ${props => props.ml + "px" || 0};
  ${props => props.danger && `
    cursor: url("https://img.icons8.com/fluency/96/angry.png"), auto;
  `}
`;

export const Card = styled.div<{ center: boolean }>`
  margin: 10px;
  padding: 30px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: white;
  //box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  ${props => props.center && `
    width: 40%;
    margin: auto;
  `};

  &:hover {
    transform: scale(1.1);
  }
`;

export const SubContainerCard = styled(Card)`
  width: 144px;
  overflow: hidden;
  cursor: pointer;
  transition: all .3s ease-in-out;
`;

export const SubmitButton = styled.input`
  ${props => props.type == 'submit' && `
    padding: 8px;
    background-color: transparent;
    color: white;
    border-radius: 4px;
  `}
`;


export const EmployeeCardAction = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MutedP = styled.p<{ size: number, center: boolean }>`
  color: #9ca3af;
  font-size: ${props => props.size + 'em' || '1em'};
  text-align: ${props => props.center ? "center" : "start"};
`

export const Img = styled.img`
  border: 1px solid #9ca3af;
  background: #324a5e;
  border-radius: 100%;
  box-shadow: inset 9.91px 9.91px 15px #1a1a1a, inset -9.91px -9.91px 15px #1a1818;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
`