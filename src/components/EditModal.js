import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import "./editModal.css";

function EditModal({ dataIndex, tasksList, setTasksList, updateLocal }) {
  const [show, setShow] = useState(false);
  const [editTask, setEditTask] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditTask(tasksList[dataIndex]);
    setShow(true);
  };

  const handleSave = () => {
    let tempArr = [...tasksList];
    tempArr[dataIndex] = editTask;
    setTasksList(tempArr);
    updateLocal(tempArr);
    setShow(false);
  };

  return (
    <>
      <Button
        variant="btn btn-outline-success"
        onClick={handleShow}
        className="mx-3 custbtn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-light">Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="btn btn-outline-primary"
            onClick={handleSave}
            className="savebtn"
          >
            Save Changes
          </Button>
          <Button
            variant="btn btn-outline-secondary"
            onClick={handleClose}
            className="closebtn"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
