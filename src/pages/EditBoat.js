import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class EditBoat extends Component {
  // definimos constructor y super para utilizar los props que recibirÃ¡ este componente (opcional)
  constructor(props) {
    super(props);
    // definimos nuestro state con las keys del project que estaremos editando (title y description)
    this.state = {
      // ya que preveemos que recibiremos por props una variable con el project a editar, nos adelantaremos y lo llamaremos 'theProject'
      boatName: this.props.boatName,
      year: this.props.year,
      typeBoat: this.props.typeBoat,
      country: this.props.country,
      currentLocation: this.props.currentLocation,
      crewNumber: this.props.crewNumber,
      rooms: this.props.rooms,
      length: this.props.length,
      image: this.props.image,
      owner: this.props.owner,
    };
  }
  // definimos un mÃ©todo que se encargue del submit de nuestro form de ediciÃ³n
  handleFormSubmit = (event) => {
    // 1ro -  declaramos dos variables con los valores de nuestras keys del state (title y descripcion)
    event.preventDefault();
    let {
      boatName,
      year,
      typeBoat,
      country,
      currentLocation,
      crewNumber,
      rooms,
      length,
      image,
    } = this.state;
    // 2do - evitamos el comportamiento default al hacer el submit de un formulario.

    // 3ro - realizamos una llamada axios a nuestra ruta PUT del back encargada de actualizar nuestros projects, y le pasamos nuestras variables antes definidas para poder actualizar.
    console.log(this.state, "coonsole de this.state")
    axios
      .put(
        `${process.env.REACT_APP_API_URI}/profile/${this.props.match.params.id}/editBoat`,
        {
          boatName,
          year,
          typeBoat,
          country,
          currentLocation,
          crewNumber,
          rooms,
          length,
          image,
        }
      )
      .then(() => {
        // 4to - 'then', ejecutaremos el mÃ©todo 'getSingleProject' declarado en el componente padre de EditProject (es decir, ProjectDetails) que nos llega a travÃ©s de props como 'getTheProject'...
        // this.props.getTheUser();
        // ... y luego redirigimos a nuestra ruta '/projects'
        this.props.history.push(`/gettingProfile/${this.props.user._id}`);
      })
      // 5to - en caso de haber un error, lo atrapamos y mostramos en consola
      .catch((error) => console.log(error));
  };
  handleChangeBoat = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = async (e) =>{
    console.log("the file uploaded is ", e.target.files[0])
    const upload = new FormData();
    upload.append("image", e.target.files[0] )
    try {
      const res = await service.handleUpload(upload)
      console.log("response is ", res)
      this.setState({image: res.secure_url})
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    // retornamos en el render un form que ejecute, al hacer submit, la funciÃ³n que se encarga de ello y que, para cada input ejecute, ante algÃºn cambio, las funciones antes declaradas que de ello se encargan (recordar que el componente debiera ser controlado, lo que harÃ¡ que el value de cada input 'venga' del valor correspondiente del state).
    // por Ãºltimo, agregamos un input de tipo 'submit'
    return (
      <div className="edit">
        <hr />
        <h1>Edit your Boat</h1>
        <form className="edit-info" onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Boat name:   </label>
          <input
            type="text"
            name="boatName"
            value={this.state.boatName}
            onChange={(e) => this.handleChangeBoat(e)}
          />
          <br/>
          <label>Year:   </label>
          <input
            name="year"
            value={this.state.year}
            onChange={(e) => this.handleChangeBoat(e)}
          />
          <br/>
          <label>Type of boat:   </label>
          <select name="typeboat" onChange={(e) => this.handleChangeBoat(e)}>
          <option>Choose Type</option>
            <option value="power">Power</option>
            <option value="sail">Sail</option>
          </select>
          <br/>
          <label>Country:   </label>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={(e) => this.handleChangeBoat(e)}
          />
          <br/>
          <label>current Location:   </label>
          <input
            type="text"
            name="currentLocation"
            value={this.state.currentLocation}
            onChange={(e) => this.handleChangeBoat(e)}
          />
          <br/>
          <label>Crew number:   </label>
          <input
            type="text"
            name="crewNumber"
            value={this.state.crewNumber}
            onChange={(e) => this.handleChangeBoat(e)}
          />
          <br/>
          <label>Rooms:   </label>
          <input
            type="text"
            name="rooms"
            value={this.state.rooms}
            onChange={(e) => this.handleChangeBoat(e)}
          />
          <br/>
          <label>Length:   </label>
          <input
            type="text"
            name="length"
            value={this.state.length}
            onChange={(e) => this.handleChangeBoat(e)}
          />
          <br/>
          <label>Image:   </label>
          <input
            type="file"
            onChange={(e) => this.handleFileUpload(e)}
          />
          <br/>
          <div className="submit">
          <input type="submit" value="Submit" />
          </div>
        </form>
        <button className="login-button">
          <Link to={`/gettingProfile/${this.props.match.params.id}`}>
            Back to my profile
          </Link>
        </button>
      </div>
    );
  }
}
export default withAuth(EditBoat);
