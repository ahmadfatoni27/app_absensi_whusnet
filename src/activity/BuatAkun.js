// NOTE :
// #5 Fetching data dengan useEffect
// fungsi = hampir sama dengan component
import React, { useEffect, useState } from 'react';

// import axios from 'axios';
// import ReactDOM from 'react-dom'
import {Button, Form, FloatingLabel, Tab, Tabs} from 'react-bootstrap';
// import swal from 'sweetalert';

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
        <div className="col-12 px-0">
        <div className="bg-default bg-gradient rounded-bottom p-4 py-5">
        <p className="h5 text-center text-white py-5 lt-spacing">Aplikasi Absensi</p>
        </div>
        </div>

        <div data-cy="form-login" className="col-12 px-0 z-index-1 position-absolute mt-11">
          <div className="bg-white bg-gradient rounded-4 shadow p-3 py-3 mx-4 mb-4">
          <p className="h6 text-center text-default py-4 mt-0 lt-spacing">Buat Akun</p>

          <FloatingLabel controlId="floatingSelect" label="Dari Cabang ?">
            <Form.Select aria-label="Floating label select example">
              <option>Select Cabang</option>
              <option value="1">Cabang 1</option>
              <option value="2">Cabang 2</option>
              <option value="3">Cabang 3</option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel className="mt-4" controlId="floatingInputGrid" label="Nama">
            <Form.Control type="text" placeholder="Andiana" />
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

              <div className="text-center mt-4 d-grid gap-2">
                <Button variant="default text-white rounded-3 py-3" size="sm">
                  Buat Akun
                </Button>
              </div>
              <div className="mt-0 d-grid gap-2 fs-6">
                <a href="#" className="fst-italic text-decoration-none link-warning mb-2">Kembali login</a>
              </div>

          </div>
        </div>


      </div>
      </div>
    );

  }

  export default App;
