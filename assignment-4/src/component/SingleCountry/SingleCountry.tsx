import { border } from '@mui/system';
import React, { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, NavigateProps, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getBorderCountry, getSingleCountry } from '../../features/countrySlice';
import { SingleCountryType } from '../../types/countryList';
import "../SingleCountry/SingleCountry.css";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Button, Modal } from 'react-bootstrap';
import EditCountry from '../EditCountry/EditCountry';
import { Fade } from "react-awesome-reveal";
import 'animate.css';


 //map
 const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
// end map  

const SingleCountry=()=> {

    const {name} = useParams();
    // const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState<SingleCountryType>({} as SingleCountryType);
    const [matchedCountry, setMatchedCountry] = useState<SingleCountryType>({} as SingleCountryType);
    const {singleCountry,loading} = useAppSelector((state)=> state.country)
        //Final local storge data
    const [finalLocalData, setFinalLocalData] = useState<SingleCountryType[]>([]);
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    
    const getLocalStorageData = () =>{
        let localData = localStorage.getItem("countryList")
        if(localData){
            setFinalLocalData(JSON.parse(localData))
        }
        // console.log("finalData",finalLocalData)
    }

   useEffect(()=>{
       if(name?.length === 3){
        dispatch(getBorderCountry(name));
       }else{
        dispatch(getSingleCountry(name))
       }
    },[name,dispatch])
    // console.log(singleCountry)
    useEffect(()=>{
        setCountry(singleCountry)
        getLocalStorageData()
        finalLocalData.map((country)=>{
            if(country.name.common === singleCountry.name?.common){
                // (setCountry(country))
                setMatchedCountry(country)
            }
        })

        return (()=>{
            setCountry({}as SingleCountryType)
        })
    },[singleCountry])

    useEffect(()=>{
        matchedCountry && setCountry(matchedCountry) 
    },[matchedCountry])


   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCiVS2AmNxWyrg1iAxvj4tgnlS8FnB0hcU"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  //map end
    const handelBorder = (border:string) => {
        console.log("top",border)
        dispatch(getBorderCountry(border));
        console.log("border",singleCountry);
        let path = `/name/${border}`; 
        navigate(path)
    }

    const mystyle = {
        width: "600px",
        height: "450",
        frameborder: "0",
      
    };
    const center = {
        lat: singleCountry.latlng && singleCountry.latlng[0],
        lng: singleCountry.latlng && singleCountry.latlng[1],
      };

    //   edit function
    const [displayForm, setDispayForm] = useState(false);
    const handleShow = () => setDispayForm(true);
    const [localstorageName, setLocalstorageName] = useState(singleCountry.name?.official);
    const handleClose = () => {
        setDispayForm(false);
        const name = localStorage.setItem("name",localstorageName)
        // console.log("localstoreage",name);
    }

    const handelLocalName =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLocalstorageName(e.target.value)
    }

    return (
        <div className='container'>
            <h3></h3>
            
            <div className='row button-top-mobile'>
                <div className='col-md-5 text-center image-center mb-4'>
                    <img className="animate__animated animate__bounce" src={singleCountry.flags?.svg} />
                </div>
                <div className='col-md-5 text-center mb-3'>
                    <button className='btn btn-large btn-primary' onClick={handleShow}>Edit Country Details</button>
                    {/* display popup form  */}
                 
                     <Modal show={displayForm} onHide={handleClose} dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title" >
                        <Modal.Header closeButton>
                        <Modal.Title>Edit Contry Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditCountry singleCountry={country}/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>    
        
            {/* display details single country */}
            <Fade direction="left">
            <div className='details'>
                <div className='row'>
                    <div className='col-md-5 borders'>
                        <h3 className='mt-3'>Official Name: {country.name?.official}</h3>
                        <h3>Population: {country.population}</h3>
                        <div className="d-flex" >borders:{ country.borders ? country.borders?.map((border)=>(
                            <h3 key={border} onClick={()=>handelBorder(border)}>
                                <span className='borders mr-2 cursor'>{border} </span>
                            </h3>
                        )) : <h3 className='ml-2 '>No Border</h3>}</div>
                    </div>
                    <div className='col-md-5 borders'>
                        <h3 className='mt-3'>Region: {country?.region}</h3>
                        <h3>Capital: {country?.capital}</h3>

                        <h3>Currencies: {country.currencies && Object.keys(country?.currencies).map((key)=>(
                            <span key={country.currencies[key]?.name}>{country.currencies[key]?.name} </span>
                        ))}</h3>

                        <h3>Languages: {country.languages && Object.keys(country?.languages).map((lang)=>(
                            <span key={lang}>{country.languages[lang]}, </span>
                        ))}</h3>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade direction='right'>
            <div className='map mt-5'>
                {   isLoaded && (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={3}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                    <Marker position={center}/>    
                    </GoogleMap>
                    ) 
                }
            </div>
            </Fade>
        </div>
    )
}

export default SingleCountry