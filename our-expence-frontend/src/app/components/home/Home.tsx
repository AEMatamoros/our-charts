import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import SideOptions from '../../layouts/SideOptions';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';

import { loadProducts, createProduct, updateProduct, deleteProduct } from '../../actions/productActions';
import { loadCategorys } from '../../actions/categoryActions';
import { loadMonthTrack } from '../../actions/trackActions';

import TrackAlerts from '../../../helpers/trackAlerts';

export default function Home() {

  let { id } = useParams();

  //Dispatch
  let dispatch = useDispatch();

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

  let expences: any = useSelector((state) => state);
  
  //Load Init Products
  useEffect(() => {
    dispatch(loadMonthTrack({}))
    dispatch(loadProducts({}))
    dispatch(loadCategorys({}))
  }, [dispatch])



  useEffect(() => {
    TrackAlerts(expences);
  }, [])
  

  //Reset Form
  useEffect(() => {
    
    if (formState.isSubmitSuccessful) {
      reset({ name: '', price: '', category: ''});
    }
    
  }, [formState, reset]);

  
  const handleClose = () => setShow(false)
  const handleShow = (type:string,data:any={}) => {
    
    if(type==='create'){
      reset({ name: '', price: '', category: ''});
      setModalLabels({
        title:"Add New Product",
        button:"Add"
      })
    }else if(type === 'edit'){
      setValue('id',data["_id"]);
      setValue('name',data.name);
      setValue('price',data.price);
      setValue('category', data.category);
      setModalLabels({
        title:"Edit Product",
        button:"Edit"
      });

    }else{
      setValue('id',data["_id"]);
      setValue('name',data.name);
      setValue('price',data.price);
      setValue('category', data.category);
      setModalLabels({
        title:"Edit Product",
        button:"Edit"
      });
      setModalLabels({
        title:"View",
        button:"Edit"
      });
    }

    setShow(true)
  }

  const onSubmit = (data: any) => {
    if(modalLabels.title==='Add New Product'){
      dispatch(createProduct(data));
    }else{
      dispatch(updateProduct(data));
    }
    setShow(false)
  }

  const HandleDelete = (id:number) =>{
    Swal.fire({
      title: 'Do you want to delete the product?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteProduct({id}))
      }
    })
  }

  const formatDate = (date:string) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
  return (
    <>
      <main className="col-12 row mx-0 main-container">
        <SideOptions />
        <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 px-4 mt-5">
          <div className="row">
            <h1 className="col-sm-12 col-xs-12 col-md-10 col-lg-10">Our Expences</h1>
            <div className="col-sm-12 col-xs-12 col-md-2 col-lg-2">
              <button
                className="btn btn-main form-control my-1"
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
                <th>Date</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {id && id.length > 0 ? <>
                {expences.products.map((product:any, index:any) => {
                  return<>
                    {product.category === id &&
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <i className="fa-solid fa-eye text-info" onClick={()=>{handleShow('edit',product)}}></i>
                        <i className="table-icons fa-solid fa-pen-to-square text-detail1 cursor-pointer" onClick={()=>{handleShow('edit',product)}}></i>
                        <i className="table-icons fa-solid fa-trash-can text-danger cursor-pointer" onClick={()=>{HandleDelete(product._id)}}></i>
                      </div>
                    </td>
                  </tr>
                    }
                  </>
                  
                
              })}
              </>
              :
              <>
                {expences.products.map((product:any, index:any) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{expences.categories.map((cat:any)=>{
                      if(cat._id === product.category){
                        return cat.name
                      }else{
                        return <></>
                      }
                    })}</td>
                    <td>{product.price}</td>
                    <td>{formatDate(product.date)}</td>
                    <td>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <i className="fa-solid fa-eye text-info" onClick={()=>{handleShow('view',product)}}></i>
                        <i className="table-icons fa-solid fa-pen-to-square text-detail1 cursor-pointer" onClick={()=>{handleShow('edit',product)}}></i>
                        <i className="table-icons fa-solid fa-trash-can text-danger cursor-pointer" onClick={()=>{HandleDelete(product._id)}}></i>
                      </div>
                    </td>
                  </tr>
                )
              })}
              </>}
              
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
                disabled={modalLabels.title==='View'}
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
                disabled={modalLabels.title==='View'}
              />
              {errors.price && <span className='text-danger'>This field is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="">Category</label>
              <select
              className="form-control"
              defaultValue=""
              {...registerProduct('category', { required: true })}
              disabled={modalLabels.title==='View'}
            >
              <option value="" disabled>
                -- Select --
              </option>
              {expences.categories.map((category:any, index:any) => {
                return (
                  <option value={category._id}>{category.name}</option>
              )})}
              <input
                className="form-control"
                type="text"
                placeholder='id'
                hidden
                {...registerProduct('id')}
                disabled={modalLabels.title==='View'}
              />
            </select>
            </div>
            

            {errors.category && <span className='text-danger'>This field is required</span>}

            <button type="submit" className="form-control btn btn-main my-4" hidden={modalLabels.title==='View'}>
              {modalLabels.button}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
