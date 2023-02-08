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
                <span className="ms-3">Profil Saya</span>
            </Navbar.Brand>
        </Container>
        </Navbar>
        </div>

          <div class="col-md-3 offset-md-3 text-center mt-5 pt-4">
              <Card.Img variant="top rounded-circle img-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYagfjtHRSwXJKfn_LOgXzAsS1rYL96U_-AGCSpbQDledTIT-6oaxYiEE3Tdv7p1zT7E&usqp=CAU" />
               <h5 class="card-title pt-3">Andi Wicaksono</h5>
               <Card.Subtitle className="mb-3 text-muted pt-1">
                  andiwicaksono@gmail.com
               </Card.Subtitle>
          </div>

          <div className="col-12 px-0 mt-2">
              <div className="bg-white bg-gradient rounded-2 shadow-sm py-0 mx-2 mb-3">
                <ul className="p-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                  Detail Informasi Profil
                  <span class="bg-white rounded-pill"><a href="#" className="text-decoration-none pe-2">Edit </a><Icon.nextIcon/></span>
                  </li>
                </ul>
              </div>
          </div>

        <div data-cy="form-login" className="col-12 px-0">
          <div className="bg-white bg-gradient rounded-2 shadow-sm py-0 mx-2 mb-4">

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Id
              <span class="text-secondary rounded-pill">01222ok100</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Nama Lengkap
              <span class="text-secondary rounded-pill">Andi Wicaksono</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Nama Perusahaan
              <span class="text-secondary rounded-pill">-</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              No Handphone
              <span class="text-secondary rounded-pill">0838.4547.8148</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Password
              <span class="text-secondary rounded-pill">***</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Alamat
              <span class="text-secondary rounded-pill">Jl Merdeka no 21 Ponorogo</span>
            </li>




          </ul>

          </div>
        </div>

      </div>
      </div>
    );

  }
  export default App;
