import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    width: 100%;
    margin: 20px auto;
    padding: 20px;
    background: white;
    border-radius: 20px;
    display: grid;
    gap: 20px;
`;

export const Tasks = styled.View`

`;

export const TaskContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: #3064ec;
    padding: 8px;
`;

export const Buttons = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const RemoveButton = styled.TouchableOpacity`
    background: red;
    padding: 8px;
    border-radius: 10px;
`;

export const RemoveButtonText = styled.Text`
    color: white;
    font-size: 16px;
`;

export const DoneButton = styled.TouchableOpacity`
    background: green;
    padding: 8px;
    border-radius: 10px;
`;

export const DoneButtonText = styled.Text`
    color: white;
    font-size: 16px;
`;

export const Task = styled.Text`
    font-size: 20px;
    
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};

`;

