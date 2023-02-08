// NOTE :
// #5 Fetching data dengan useEffect
// fungsi = hampir sama dengan component
import React, { useEffect, useState } from 'react';

// import axios from 'axios';
// import ReactDOM from 'react-dom'
import {
  Button, Form, FloatingLabel, Container,
  Nav, Navbar, NavDropdown,
  Tab, Tabs} from 'react-bootstrap';
// import swal from 'sweetalert';

// import DataTable from 'react-data-table-component';
import helpers from '../components/helpers';
import Images from '../components/images';
import Icon from '../components/icons';

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
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.bottom = "0";
        } else {
          document.getElementById("navbar").style.bottom = "-55px";
        }
        prevScrollpos = currentScrollPos;
      }

    })

    return(
    <>
      <div id="navbar" className="container-fluid bg-light px-2 z-index-1 position-fixed fixed-bottom">
        <div className="row align-items-center">
          <div className="col">
            <div className="list-group">
                <a href="#" className="text-center border-0 bg-light list-group-item list-group-item-action active" aria-current="true">
                  <Icon.HomeIcon className="text-white"/>
                </a>
            </div>
          </div>

          <div className="col">
            <div className="list-group">
                <a href="#" className="text-center border-0 bg-light list-group-item list-group-item-action active" aria-current="true">
                  <Icon.ScanQrIcon className="text-white"/>
                </a>
            </div>
          </div>

          <div className="col">
            <div className="list-group">
                <a href="#" className="text-center border-0 bg-light list-group-item list-group-item-action active" aria-current="true">
                  <Icon.SettingsIcon className="text-white"/>
                </a>
            </div>
          </div>

          </div>
        </div>

      <div className="container-fluid">

      <div className="row">
        <div className="col-12 px-0">
        <Navbar className="bg-default rounded-bottom">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white">
            <Icon.BackIcon/>
                <span className="ms-3">Riwayat Absensi</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end text-white">
              <Navbar.Text>
                <Icon.ArrowsSort/>
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>



        <div data-cy="card-info" className="col-12 px-0 mt-0">

          <div data-cy="section-riwayat-Absensi" className="bg-white bg-gradient p-3 mx-2 mb-2">

            <div className="row">
              <div className="col list-group pe-0">

                <div className="card border-0 shadow-sm list-group-item-action active mb-2">
                    <div className="card-body">
                      <div className="row gx-3">
                        <div className="col-9 ps-0 text-dark text-start d-flex align-items-center">
                          <h6 className="card-title text-default fw-600">Checkin</h6>
                        </div>
                        <div className="col-3 align-items-end text-end">
                          <h6 className="card-title">07:21:11</h6>
                        </div>
                      </div>
                        <div className="row gx-3">
                          <div className="col-9 ps-0 text-dark text-start d-flex align-items-center">
                              <p className="text-dark lt-spacing mb-0">Selasa,10 sep 2022</p>
                          </div>
                          <div className="col-3 align-items-end text-end pe-0">
                            <Icon.checkIcon className="text-red"/>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm list-group-item-action mb-2">
                    <div className="card-body">
                      <div className="row gx-3">
                        <div className="col-9 ps-0 text-dark text-start d-flex align-items-center">
                          <h6 className="card-title text-default fw-600">Checkin</h6>
                        </div>
                        <div className="col-3 ps-0 align-items-end text-end">
                          <h6 className="card-title">07:21:11</h6>
                        </div>
                      </div>
                        <div className="row gx-3">
                          <div className="col-9 ps-0 text-dark text-start d-flex align-items-center">
                              <p className="text-dark lt-spacing mb-0">Selasa,10 sep 2022</p>
                          </div>
                          <div className="col-3 align-items-end text-end pe-0">
                            <Icon.checkIcon className="text-red"/>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm list-group-item-action mb-2">
                    <div className="card-body">
                      <div className="row gx-3">
                        <div className="col-9 ps-0 text-dark text-start d-flex align-items-center">
                          <h6 className="card-title text-default fw-600">Checkin</h6>
                        </div>
                        <div className="col-3 ps-0 align-items-end text-end">
                          <h6 className="card-title">07:21:11</h6>
                        </div>
                      </div>
                        <div className="row gx-3">
                          <div className="col-9 ps-0 text-dark text-start d-flex align-items-center">
                              <p className="text-dark lt-spacing mb-0">Selasa,10 sep 2022</p>
                          </div>
                          <div className="col-3 align-items-end text-end pe-0">
                            <Icon.checkIcon className="text-red"/>
                          </div>
                        </div>
                    </div>
                </div>

              </div>
            </div>



          </div>


        </div>


      </div>
      </div>
      </>
    );

  }

  export default App;
