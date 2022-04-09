import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import SideOptions from '../../layouts/SideOptions'

import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'

export default function Categories() {
  const [show, setShow] = useState(false)
  const [modalLabels, setModalLabels] = useState({
    title: '',
    button: '',
  })

  const {
    register: registerProduct,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
    setValue,
  } = useForm()

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', price: '', category: '' })
    }
  }, [formState, reset])

  let initialState = [
    {
      id: 1,
      name: 'Food',
      icon: 'fa-solid fa-burger fa-6x text-success',
      max: 100,
    },
    {
      id: 2,
      name: 'Clothes',
      icon: 'fa-solid fa-user fa-6x text-success',
      max: 100,
    },
    {
      id: 1,
      name: 'Transport',
      icon: 'fa-solid fa-car fa-6x text-success',
      max: 100,
    },
    {
      id: 1,
      name: 'Games',
      icon: 'fa-solid fa-gamepad fa-6x text-success',
      max: 100,
    },
  ]

  const [expenses, setExpenses] = useState(initialState)

  const handleClose = () => setShow(false)
  const handleShow = (type: string, data: any = {}) => {
    if (type === 'create') {
      reset({ name: '', price: '', category: '' })
      setModalLabels({
        title: 'Add New Product',
        button: 'Add',
      })
    } else {
      setValue('name', data.name)
      setValue('price', data.price)
      setValue('category', data.category)
      setModalLabels({
        title: 'Edit Product',
        button: 'Edit',
      })
    }

    setShow(true)
  }

  const onSubmit = (data: any) => {
    if (modalLabels.title == 'Add New Product') {
      console.log('Create')
      console.log(data)
    } else {
      console.log('Edit')
      console.log(data)
    }
    setShow(false)
  }

  const HandleDelete = (id: number) => {
    Swal.fire(
      'Delete product',
      '<p>Are u shure u want to delete this product?</p>',
      'warning',
    ).then((res) => {
      console.log('delete')
    })
  }

  return (
    <>
      <main className="col-12 row mx-0 main-container">
        <SideOptions />
        <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 px-4 mt-5">
          <div className="row">
            <h1 className="col-10">My Categories</h1>
            <div className="col-2">
              <button
                className="btn btn-primary form-control"
                onClick={() => {
                  handleShow('create')
                }}
              >
                Create
              </button>
            </div>
          </div>
          <Table hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Max Amounth</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1 }</td>
                    <td>{product.name}</td>
                    <td>{product.max}</td>
                    <td>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <i
                          className="fa-solid fa-pen-to-square text-warning cursor-pointer"
                          onClick={() => {
                            handleShow('edit', product)
                          }}
                        ></i>
                        <i
                          className="fa-solid fa-trash-can text-danger cursor-pointer"
                          onClick={() => {
                            HandleDelete(product.id)
                          }}
                        ></i>
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
                placeholder="My Product Name"
                {...registerProduct('name', { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="">Price</label>
              <input
                className="form-control"
                type="number"
                placeholder="1"
                {...registerProduct('max', { required: true })}
              />
              {errors.price && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="">Icon</label>
              <select
                className="form-control"
                defaultValue=""
                {...registerProduct('icon', { required: true })}
              >
                <option value="" disabled>
                  -- Select --
                </option>
                <option value="fa-solid fa-burger fa-6x text-success">Food</option>
                <option value="fa-solid fa-user fa-6x text-success">Clothes</option>
                <option value="fa-solid fa-car fa-6x text-success">Car</option>
                <option value="fa-solid fa-gamepad fa-6x text-success">Gamepad</option>
              </select>
            </div>

            <button type="submit" className="form-control btn btn-primary my-4">
              {modalLabels.button}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
