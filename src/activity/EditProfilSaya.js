// NOTE :
// #5 Fetching data dengan useEffect
// fungsi = hampir sama dengan component
import React, { useEffect, useState } from 'react';

// import axios from 'axios';
// import ReactDOM from 'react-dom'
import {Button, Form, FloatingLabel, Container,
  Nav, Navbar, NavDropdown,
  Card,
  Tab, Tabs} from 'react-bootstrap';
// import swal from 'sweetalert';
import Icon from '../components/icons';

// import DataTable from 'react-data-table-component';
// import helpers from './components/helpers';
import $ from 'jquery';

function App() {
  const [dataModel, setDataModel] = useState([])
  const [mode, setMode] = useState('form')
  const [update, setUpdate] = useState(false)
  const [search, setSearch] = useState("")
  const [processing, modeProcessing] = useState(false)

  const [selectedRows, setSelectedRows] = React.useState([])
  const [title, setTitle] = useState("List data Pengguna")
  const [toggleCleared, setToggleCleared] = React.useState(false)

  // function selected data of
  // const handleRowSelected = React.useCallback(state => {
  //   setSelectedRows(state.selectedRows);
  // }, []);

  // function back
  const goBack = (key) => {
    setMode('list')
    setupTitle(update)
    console.log(mode)
    setUpdate(false);
    // setDataModelUpdate([]);
    console.log(" ========== ");
    console.log("mode : "+mode+", Mode_update : "+update);
  }
  // button mode Update
  // const ButtonMode = () => {
  //   return (
  //     (update == true) ?
  //     <div className="py-2">
  //     <Button type="button" onClick={(key) => goBack('list')} variant="outline-secondary">Back</Button>
  //     <Button type="button"
  //     onClick={(key) => doSave(dataModelUpdate)}
  //     variant="outline-primary mx-2" >Update</Button>
  //     <Button type="button" variant="outline-danger">Delete</Button>
  //     </div>
  //     :
  //     <div className="py-2">
  //     <Button type="button"
  //     onClick={(key) => doSave(dataModelUpdate)}
  //     variant="outline-primary">Save</Button>
  //     </div>
  //   )
  // }

  // get data all
  // const getdataAll = async page => {
  //   modeProcessing(true)
  //   const res = await axios.get(`https://restcountries.com/v2/all`)
  //   const res = await axios.get(`https://aplikasi.whusnet.com/contoh/ApiContoh/getallpengguna`)
  //     console.log(res.data)
  //     setDataModel(res.data.Data)
  //     setDataModelUpdate(res.data.Data)
  //     modeProcessing(false)
  //   };

    // logic conditions per field.
    // const conditionalRowStyles = [
    //   { when: row => row.KEC == 'PONOROGO',  style: helpers.green() },
    //   { when: row => row.KEC == 'KAUMAN',style: helpers.warning() }
    // ]

    // action for delete.


    // for search data


    // save and update data


    // custom classies
    const customClassies = () => {

    }

    const setupTitle = (update) => {
      if (mode === 'form' && update === true) {
        setTitle("List data Pengguna")
      }if (mode === 'list' && update === false) {
        setTitle("Form Update same data")
      }
    }

    // function select


    useEffect(() => {
      // search ? getFilterDataAll(search) : getdataAll();
      // setupTitle(update)
      // setMode('list')
    }, []);



    // adding initialize
    $(document).ready(function () {
      // customClassies();
    })

    return(
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0 z-index-1 position-absolute">
        <Navbar className="bg-default rounded-bottom py-2">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white">
            <Icon.BackIcon/>
                <span className="ms-3">Edit Profil</span>
            </Navbar.Brand>
        </Container>
        </Navbar>
        </div>

          <div class="col-md-3 offset-md-3 text-center mt-5 pt-5">
              <Card.Img variant="top rounded-circle img-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYagfjtHRSwXJKfn_LOgXzAsS1rYL96U_-AGCSpbQDledTIT-6oaxYiEE3Tdv7p1zT7E&usqp=CAU" />
               <Card.Subtitle className="mb-2 text-muted pt-3">
                  <Card.Link className="text-decoration-none" href="#">Ubah Foto</Card.Link>
               </Card.Subtitle>
          </div>

        <div data-cy="form-login" className="col-12 px-0 mt-3">
          <div className="bg-white bg-gradient rounded-4 shadow p-3 py-3 mx-4 mb-4">

          <FloatingLabel className="mt-2" controlId="floatingInputGrid" label="Id">
            <Form.Control type="number" disabled/>
          </FloatingLabel>

          <FloatingLabel className="mt-4" controlId="floatingInputGrid" label="Nama Lengkap">
            <Form.Control type="text" disabled/>
          </FloatingLabel>

          <FloatingLabel className="mt-4" controlId="floatingInputGrid" label="Cabang">
            <Form.Control type="text" disabled/>
          </FloatingLabel>

          <FloatingLabel className="mt-4" controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

            <FloatingLabel className="mt-4" controlId="floatingInputGrid" label="Password">
              <Form.Control type="password" placeholder="1234" />
            </FloatingLabel>
              <Form.Text id="passwordHelpBlock" muted>
                Password harus 8-20 panjangnya , kombinasi huruf Besar Dan Angka.
              </Form.Text>

              <FloatingLabel className="mt-4" controlId="floatingInputGrid" label="Alamat">
                <Form.Control type="text"/>
              </FloatingLabel>

              <div className="text-center mt-4 d-grid gap-2">
                <Button variant="default text-white rounded-3 py-3" size="sm">
                  Simpan
                </Button>
              </div>

          </div>
        </div>

      </div>
      </div>
    );

  }
  export default App;
