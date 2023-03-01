import styled from 'styled-components';
import { Form as FormContact, Field as FormInput } from 'formik';
export const Form = styled(FormContact)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Field = styled(FormInput)`
  margin-bottom: 8px;
  padding: 8px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Section = styled.div`
  padding: 8px;
  display: flex;
  width: 380px;
  height: 180px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  outline: 1px solid black;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #f2f3f4;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  :active {
    background-color: grey;
    color: white;
  }
`;
