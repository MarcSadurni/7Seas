import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class CreateBoat extends Component {
  // definimos constructor y super para utilizar los props que recibirÃ¡ este componente (opcional)
  constructor(props) {
    super(props);
    // definimos nuestro state con las keys del project que estaremos editando (title y description)
    this.state = {
      // ya que preveemos que recibiremos por props una variable con el project a editar, nos adelantaremos y lo llamaremos 'theProject'
      boatName: "",
      year: "",
      typeBoat: "",
      country: "",
      currentLocation: "",
      crewNumber: "",
      rooms: "",
      length: "",
      image: "",
      owner: "",
      // isShowing: false,
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
      owner,
      crewNumber,
      rooms,
      length,
      image,
    } = this.state;
    // 2do - evitamos el comportamiento default al hacer el submit de un formulario.

    // 3ro - realizamos una llamada axios a nuestra ruta PUT del back encargada de actualizar nuestros projects, y le pasamos nuestras variables antes definidas para poder actualizar.

    axios
      .post(
        `http://localhost:4000/profile/createBoat`,
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
          owner,
        }
      )
      .then(() => {
        // 4to - 'then', ejecutaremos el mÃ©todo 'getSingleProject' declarado en el componente padre de EditProject (es decir, ProjectDetails) que nos llega a travÃ©s de props como 'getTheProject'...
        // this.props.getTheUser();
        // ... y luego redirigimos a nuestra ruta '/projects'
        this.props.history.push(`/profile/${this.props.match.params.id}`);
      })
      // 5to - en caso de haber un error, lo atrapamos y mostramos en consola
      .catch((error) => console.log(error));
  };
  handleCreateBoat = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    // retornamos en el render un form que ejecute, al hacer submit, la funciÃ³n que se encarga de ello y que, para cada input ejecute, ante algÃºn cambio, las funciones antes declaradas que de ello se encargan (recordar que el componente debiera ser controlado, lo que harÃ¡ que el value de cada input 'venga' del valor correspondiente del state).
    // por Ãºltimo, agregamos un input de tipo 'submit'
    return (
      <div>
        <hr />
        <h3>Edit your Boat</h3>
        <form onSubmit={this.handleFormSubmit} enctype="multipart/form-data">
          <label>Boat name:</label>
          <input
            type="text"
            name="boatname"
            value={this.state.boatName}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <label>Year:</label>
          <input
            name="year"
            value={this.state.year}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <label>Type of boat:</label>
          <select name="typeboat" onChange={(e) => this.handleCreateBoat(e)}>
            <option value="power">Power</option>
            <option value="sail">Sail</option>
          </select>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <label>current Location:</label>
          <input
            type="text"
            name="currentLocation"
            value={this.state.currentLocation}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <label>Crew number:</label>
          <input
            type="text"
            name="crewNumber"
            value={this.state.crewNumber}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <label>Rooms:</label>
          <input
            type="text"
            name="rooms"
            value={this.state.rooms}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <label>Length:</label>
          <input
            type="text"
            name="length"
            value={this.state.length}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <label>Image:</label>
          <input
            type="file"
            name="image"
            value={this.state.image}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <input type="submit" value="Submit" />
        </form>
        <button>
          <Link to={`/profile/${this.props.match.params.id}`}>
            Back to my profile
          </Link>
        </button>
      </div>
    );
  }
}
export default withAuth(CreateBoat);
