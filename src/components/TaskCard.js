import React from 'react'
import Card from 'react-bootstrap/Card';
import EditModal from './EditModal';
import DeleteModel from './DeleteModal';


function TaskCard({task, taskIndex, tasksList, setTasksList, updateLocal}) {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
    <Card.Body>
      <Card.Text>
        {task}
      </Card.Text>
      <EditModal dataIndex={taskIndex} tasksList={tasksList} setTasksList = {setTasksList} updateLocal={updateLocal}/>
      <DeleteModel dataIndex={taskIndex} tasksList={tasksList} setTasksList = {setTasksList} updateLocal={updateLocal}/>
    </Card.Body>
  </Card>
  )
}

export default TaskCard
