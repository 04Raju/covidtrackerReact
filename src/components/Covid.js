import React,{useEffect,useState} from 'react'

export default function Covid() {

    const [data, setData]= useState([]);

    const getCovidData = async ()=>{
        try{
            const res= await fetch('https://data.covid19india.org/data.json');
           // console.log(res);
           const data = await res.json();
           console.log(data.statewise[0]);
           setData(data.statewise[0]);
        }catch (err){
            console.log(err);
        }
       
    }
    useEffect(() => {
       getCovidData();
    
    }, []);

    return (
        <>
            <h1  className="text-center text-white my-5"><span>&#128308;</span> LIVE</h1>
            <h2 className="text-center text-white my-5">COVID 19 CORONAVIRUS TRACKER</h2>
            <div className="container">
            <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card text-white bg-primary mb-3">
  <div className="card-header text-center fw-bold">Country</div>
  <div className="card-body">
    <h3 className="text-center">INDIA</h3>
 </div>
</div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card text-white bg-success mb-3">
  <div className="card-header text-center text-center fw-bold">Total Recovered</div>
  <div className="card-body">
    <h3 className="text-center">{data.recovered}</h3>
 </div>
</div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card text-white bg-danger mb-3">
  <div className="card-header text-center fw-bold ">Total Death</div>
  <div className="card-body">
    <h3 className="text-center">{data.deaths}</h3>
 </div>
</div>
            </div>
            </div>
            <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card text-white bg-warning mb-3">
  <div className="card-header text-center fw-bold">Confirmed</div>
  <div className="card-body">
    <h3 className="text-center">{data.confirmed}</h3>
 </div>
</div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card text-white bg-info mb-3">
  <div className="card-header text-center fw-bold ">Active</div>
  <div className="card-body">
    <h3 className="text-center">{data.active}</h3>
 </div>
</div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="card text-white bg-dark mb-3">
  <div className="card-header text-center fw-bold ">Last Updated</div>
  <div className="card-body">
    <h3 className="text-center">{data.lastupdatedtime}</h3>
 </div>
</div>
            </div>
            </div>
            </div>
          

        </>
    )
}
