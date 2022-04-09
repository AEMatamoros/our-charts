import React, { useState, useEffect } from 'react'

import SideOptions from '../../layouts/SideOptions'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { useForm } from 'react-hook-form'

import Swal from 'sweetalert2';

export default function Home() {

  const [show, setShow] = useState(false);
  const [modalLabels, setModalLabels] = useState({
    title:"",
    button:""
  });

  const {
    register: registerProduct,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
    setValue
  } = useForm()

  useEffect(() => {
    
    if (formState.isSubmitSuccessful) {
      reset({ name: '', price: '', category: ''});
    }
    
  }, [formState, reset]);

  const [expenses, setExpenses] = useState([
    {
      id:1,
      name: 'Product 1',
      category: 'C1',
      price: 10,
    },
    {
      id:2,
      name: 'Product 2',
      category: 'C1',
      price: 10,
    },
    {
      id:3,
      name: 'Product 3',
      category: 'C1',
      price: 10,
    },
    {
      id:4,
      name: 'Product 4',
      category: 'C1',
      price: 10,
    },
    {
      id:5,
      name: 'Product 5',
      category: 'C1',
      price: 10,
    },
  ])

  
  const handleClose = () => setShow(false)
  const handleShow = (type:string,data:any={}) => {
    
    if(type==='create'){
      reset({ name: '', price: '', category: ''});
      setModalLabels({
        title:"Add New Product",
        button:"Add"
      })
    }else{
      setValue('name',data.name);
      setValue('price',data.price);
      setValue('category', data.category);
      setModalLabels({
        title:"Edit Product",
        button:"Edit"
      });

    };

    setShow(true)
  }

  const onSubmit = (data: any) => {
    if(modalLabels.title==='Add New Product'){
      console.log("Create")
      console.log(data)
    }else{
      console.log("Edit")
      console.log(data)
    }
    setShow(false)
  }

  const HandleDelete = (id:number) =>{
    Swal.fire(
      "Delete product",
      "<p>Are u shure u want to delete this product?</p>",
      "warning"
    ).then(res=>{
      console.log("delete")
    })
  }

  return (
    <>
      <main className="col-12 row mx-0 main-container">
        <SideOptions />
        <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 px-4 mt-5">
          <div className="row">
            <h1 className="col-10">My Expense</h1>
            <div className="col-2">
              <button
                className="btn btn-main form-control"
                onClick={()=>{handleShow('create')}}
              >
                Create
              </button>
            </div>
          </div>
          <Table hover size="sm" className='bg-white main-table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <i className="table-icons fa-solid fa-pen-to-square text-detail1 cursor-pointer" onClick={()=>{handleShow('edit',product)}}></i>
                        <i className="table-icons fa-solid fa-trash-can text-danger cursor-pointer" onClick={()=>{HandleDelete(product.id)}}></i>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </main>
      {/* Create Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalLabels.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label> Product Name</label>
              <input
                className="form-control"
                placeholder='My Product Name'
                {...registerProduct('name', { required: true })}
              />
              {errors.name && <span className='text-danger'>This field is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="">Price</label>
              <input
                className="form-control"
                type="number"
                placeholder='1'
                {...registerProduct('price', { required: true })}
              />
              {errors.price && <span className='text-danger'>This field is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="">Category</label>
              <select
              className="form-control"
              defaultValue=""
              {...registerProduct('category', { required: true })}
            >
              <option value="" disabled>
                -- Select --
              </option>
              <option value="C1">Category1</option>
              <option value="C1">Category2</option>
            </select>
            </div>
            

            {errors.category && <span className='text-danger'>This field is required</span>}

            <button type="submit" className="form-control btn btn-main my-4">
              {modalLabels.button}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
