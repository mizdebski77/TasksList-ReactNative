import React from 'react';
import { Buttons, DoneButton, DoneButtonText, RemoveButton, RemoveButtonText, Task, TaskContainer, Tasks, Wrapper } from './styledTasksList';

export const TasksList = ({ data, removeTask, toggleTaskDone }) => {

    return (
        <Wrapper>
            <Tasks>
                {data.map((task, index) => (
                    <TaskContainer key={index}>
                        <Task done={task.done}>{task.text}</Task>

                        <Buttons>
                            <RemoveButton onPress={() => removeTask(index)}>
                                <RemoveButtonText>🗑</RemoveButtonText>
                            </RemoveButton>
                            <DoneButton onPress={() => toggleTaskDone(index)}>
                                <DoneButtonText>✔</DoneButtonText>
                            </DoneButton>
                        </Buttons>
                    </TaskContainer>
                ))}
            </Tasks>
        </Wrapper>
    );
};
