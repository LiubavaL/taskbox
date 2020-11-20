import React from 'react'

import Task from './Task'

export default {
    title: 'Task',
}
const args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0)
    }
}

export const Task1 = () => <Task {...args}/>