import { Component } from "react";



class MyBackOffice extends Component {
    state = {}


    render(){
        return(
            <>

;<>
  <div
    id="main-container"
    className="d-flex d-inline justify-content-center align-items-center"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">Add Product to Catalogue</h2>
          <form onsubmit="submitData(event)">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Insert product name here...."
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                type="textarea"
                className="form-control"
                placeholder="Insert product description here...."
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                className="form-control"
                placeholder="Insert brand here...."
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageURL">Image URL</label>
              <input
                id="imageURL"
                type="text"
                className="form-control"
                placeholder="Insert Image URL here...."
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                className="form-control"
                placeholder="Insert price here...."
              />
            </div>
            <div className="button-holder d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      className="container bg-light text-dark mt-5"
      style={{ height: 400, overflowY: "scroll" }}
    >
      <div className="row">
        <ol id="product-list" className="w-100"></ol>
      </div>
    </div>
  </div>
  
</>

            </>
        )
    }
}

export default MyBackOffice