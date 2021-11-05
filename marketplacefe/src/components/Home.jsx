import { Component } from "react";


class Home extends Component {
 state= {}
 
 render(){
     return(
        <>
        <div className="container" id="spinner-location"></div>

        <div className="container-fluid mb-2">
            
          <div className="row" id="product-catalogue"></div>
        </div>
        {/* <script>
          let catalogue = document.querySelector("#product-catalogue") let displayData
          = (data) =&gt; {"{"}
          data.forEach(obj =&gt; {"{"}
          let newItem = document.createElement("div") newItem.className = "col-3 mb-2"
          newItem.innerHTML = ` &lt;div class="col-3"&gt; &lt;div class="card"
          style="width: 18rem; border: .5px solid black"&gt; &lt;img src="${"{"}
          obj.imageUrl{"}"}" width="200px" height="300px" class="card-img-top "
          alt="..."&gt; &lt;div class="card-body" style= "max-height: 250px; "&gt;
          &lt;div&gt; &lt;h5 class="card-title"&gt;${"{"}obj.name{"}"}&lt;/h5&gt;
          &lt;h6 class="card-subtitle mb-2 text-muted"&gt;€${"{"}obj.price{"}"}
          &lt;/h6&gt; &lt;p class="card-text" style="max-width:250px; max-height:
          95px"&gt;${"{"}obj.description{"}"}&lt;/p&gt; &lt;/div&gt; &lt;div
          class="justify-content-between"&gt; &lt;a href="#" class="btn
          btn-primary"&gt;Buy now&lt;/a&gt; &lt;button type="button" id=${"{"}obj._id
          {"}"} onclick="goToDetails(event)" class="btn
          btn-secondary"&gt;edit&lt;/button&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
          &lt;/div&gt; ` catalogue.appendChild(newItem)
          {"}"}){"}"}
          let goToDetails = (event) =&gt; {"{"}
          let id = event.currentTarget.id console.log(id)
          window.location.assign("./details.html?itemid="+id)
          {"}"}
          //spinner function const isLoading = (loading) =&gt; {"{"}
          const containerLocation = document.querySelector("#spinner-location") const
          spinner = `&lt;span id="spinner" class="spinner-border spinner-border-sm
          ml-2" role="status" aria-hidden="true"&gt;&lt;/span&gt;` if (loading) {"{"}
          containerLocation.innerHTML += spinner;
          {"}"} else {"{"}
          containerLocation.querySelector("#spinner").remove()
          {"}"}
          {"}"}; window.onload = async () =&gt; {"{"}
          isLoading(true) let response = await
          fetch("https://striveschool-api.herokuapp.com/api/product/", {"{"}
          headers: {"{"}
          "Authorization": "Bearer
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQ5ODRiYjUzZDAwMTViMTllZDAiLCJpYXQiOjE2MzIzMTI3MjgsImV4cCI6MTYzMzUyMjMyOH0.1mHsb-t2ReuCs2WsyDFcnIoddjZMG44_rc-BM_Catno"
          {"}"}
          {"}"}) let data = await response.json() displayData(data) console.log(data)
          isLoading(false)
          {"}"}
        </script> */}
      </>
      
     )
 }
}

export default Home