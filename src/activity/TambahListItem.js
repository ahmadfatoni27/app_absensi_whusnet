import React, { useEffect, useState } from 'react';
import {Button, Form, InputGroup, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
import Icon from '../components/icons';

function AddNew(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div data-cy="modal-tambah-list-item">
      <Modal.Header closeButton>
      <Modal.Title data-cy="modal-add-title">Tambah List Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label data-cy="modal-add-name-title">NAMA LIST ITEM</Form.Label>
                <Form.Control data-cy="modal-add-name-input" type="text"
                placeholder="Tambahkan nama list item"
                autoFocus />
                <Form.Label data-cy="modal-add-priority-title" className="pt-3">PRIORITY</Form.Label>
                <Dropdown id="priority" data-cy="modal-add-priority-item">
                  <Dropdown.Toggle variant="default" className="border border-1" id="dropdown-priority">
                    <Icon.veryHigh data-cy="todo-item-priority-indicator" className="pe-2"/> Very High <Icon.tablerChevronDown/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Dropdown.Item data-cy="veryHigh" href="#"><Icon.veryHigh data-cy="todo-item-priority-indicator"/> Very High <Icon.checkSort/></Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="high" href="#"><Icon.high data-cy="todo-item-priority-indicator"/> High </Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="medium" href="#"><Icon.medium data-cy="todo-item-priority-indicator"/> Medium </Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="low" href="#"><Icon.low data-cy="todo-item-priority-indicator"/> Low </Dropdown.Item> <Dropdown.Divider />
                      <Dropdown.Item data-cy="veryLow" href="#"><Icon.veryLow data-cy="todo-item-priority-indicator"/> Very Low </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
          </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button data-cy="modal-add-close-button" variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button data-cy="modal-add-close-button" variant="primary" onClick={handleClose}>
      Save
      </Button>
      </Modal.Footer>
      </div>
    )
}
export default AddNew
