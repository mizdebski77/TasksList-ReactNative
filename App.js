import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Title, Wrapper } from './styledApp';
import Form from './features/Form/form';

export default function App() {
  return (
    <Wrapper>
      <Title>Tasks List</Title>
      <Form />
    </Wrapper>
  );
}

