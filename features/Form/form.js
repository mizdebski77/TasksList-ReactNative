import React, { useState } from 'react';
import { Button, ButtonText, Input, Wrapper } from './styledForm';
import { TasksList } from './TasksList/tasksList';
import { ScrollView } from 'react-native';

const Form = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            const newTask = { text: task, done: false };
            setTasks([...tasks, newTask]);
            setTask("");
        }
    };


    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const toggleTaskDone = (index) => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
    };

    return (
        <ScrollView>
            <Wrapper>
                <Input
                    placeholder='Enter Task'
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <Button onPress={addTask}>
                    <ButtonText>Send</ButtonText>
                </Button>
                <TasksList data={tasks} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
            </Wrapper>
        </ScrollView>

    );
};

export default Form;