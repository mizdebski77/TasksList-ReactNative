import styled  from "styled-components/native";

export const Wrapper = styled.View`
    width: 100%;
    margin: 20px auto;
    padding: 20px;
    background: #3064ec;
    border-radius: 20px;
    display: grid;
    gap: 20px;
`;

export const Input = styled.TextInput`
    width: 100%;
    padding: 4px;
    border-radius: 10px;
    background: white;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ff9a35;
`;

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 16px;
    color: white;
`;