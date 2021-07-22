import React from 'react';


const Weather = ({weather,location}) => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 mx-auto text-center bg-primary rounded mt-5 p-5 ">
            <h1 id="w-location" className="text-dark mb-3">{location.name}</h1>
            <h1 id="w-location" className="text-dark mt-3">{location.country}</h1>
            <h1 id="w-location" className="my-4">{weather.weather_descriptions}</h1>
            <h3 id="w-condition" className="text-dark">{weather.cloudcover}</h3>
            <img src={weather.weather_icons} id="w-icon" alt={location.name} className="img-fluid"/>
            <h3 id="w-temp">{weather.feelslike}</h3>

            <ul className="list-group mb-5">
                <li className="list-group-item" id="w-humidity">{weather.is_day}</li>
                <li className="list-group-item" id="w-feels-likes">{weather.precip}</li>
                <li className="list-group-item" id="w-wind">{weather.pressure}</li>
                <li className="list-group-item" id="w-wind">{location.lat}</li>
                <li className="list-group-item" id="w-wind">{location.lon}</li>
                <li className="list-group-item" id="w-wind">{location.timezone_id}</li>
            </ul>
        </div>
        <div className="modal fade" id="showModals" tabIndex="-1" role="dialog" aria-labelledby="showModals"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Change Location</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" className="form-control"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="save-change">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Weather;