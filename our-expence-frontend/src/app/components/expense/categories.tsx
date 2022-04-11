import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import SideOptions from '../../layouts/SideOptions'

import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategorys, createCategory, updateCategory, deleteCategory } from '../../actions/categoryActions'

export default function Categories() {

  //Dispatch
  let dispatch = useDispatch();

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

  //Load Init Products
  useEffect(() => {
    dispatch(loadCategorys({}))
  }, [])

  let expenses: any = useSelector((state) => state)

  const handleClose = () => setShow(false)
  const handleShow = (type: string, data: any = {}) => {
    if (type === 'create') {
      reset({ name: '', price: '', category: '' });
      setModalLabels({
        title: 'Add New Product',
        button: 'Add',
      });
    } else {
      setValue('id', data._id);
      setValue('name', data.name);
      setValue('max', data.max);
      setValue('icon', data.icon);
      setModalLabels({
        title: 'Edit Product',
        button: 'Edit',
      });
    }

    setShow(true)
  }

  const onSubmit = (data: any) => {
    if (modalLabels.title === 'Add New Product') {
      dispatch(createCategory(data));
    } else {
      dispatch(updateCategory(data))
    }
    setShow(false)
  }

  const HandleDelete = (id:number) =>{
    Swal.fire({
      title: 'Do you want to delete the category?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteCategory({id}))
      }
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
                className="btn btn-main form-control"
                onClick={() => {
                  handleShow('create')
                }}
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
                <th>Max Amounth</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {expenses.categories.map((category:any, index:number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1 }</td>
                    <td>{category.name}</td>
                    <td>{category.max}</td>
                    <td>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <Link to={`/categories/${category._id}`}><i className="fa-solid fa-eye text-info"></i></Link>
                        <i
                          className="fa-solid fa-pen-to-square text-detail1 cursor-pointer"
                          onClick={() => {
                            handleShow('edit', category)
                          }}
                        ></i>
                        <i
                          className="fa-solid fa-trash-can text-danger cursor-pointer"
                          onClick={() => {
                            HandleDelete(category._id)
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
                placeholder="My Category Name"
                {...registerProduct('name', { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="">Max</label>
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

            <input
                className="form-control"
                type="text"
                placeholder='id'
                hidden
                {...registerProduct('id')}
                disabled={modalLabels.title==='View'}
              />

            <button type="submit" className="form-control btn btn-main my-4">
              {modalLabels.button}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
