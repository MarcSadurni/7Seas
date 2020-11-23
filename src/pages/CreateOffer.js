import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class CreateOffer extends Component {
  // definimos constructor y super para utilizar los props que recibirÃ¡ este componente (opcional)
  constructor(props) {
    super(props);
    // definimos nuestro state con las keys del project que estaremos editando (title y description)
    this.state = {
      // ya que preveemos que recibiremos por props una variable con el project a editar, nos adelantaremos y lo llamaremos 'theProject'
      crewNumber: "",
      boardingLocation: "",
      destiny: "",
      costs: "",
      start: "",
      estimatedTime: "",
      description: "",
      nationality: "",
      ageCrew: "",
      journey: "",
      experience: "",
      seaMiles: "",
     
     
      // isShowing: false,
    };
  }
  // definimos un mÃ©todo que se encargue del submit de nuestro form de ediciÃ³n
  handleFormSubmit = (event) => {
    // 1ro -  declaramos dos variables con los valores de nuestras keys del state (title y descripcion)
    event.preventDefault();
    let {
        crewNumber,
        boardingLocation,
        destiny,
        costs,
        start,
        estimatedTime,
        description,
        nationality,
        ageCrew,
        journey,
        experience,
        seaMiles,
        offerImage,
        offerCreator,
    } = this.state;
    // 2do - evitamos el comportamiento default al hacer el submit de un formulario.

    // 3ro - realizamos una llamada axios a nuestra ruta PUT del back encargada de actualizar nuestros projects, y le pasamos nuestras variables antes definidas para poder actualizar.

    axios
      .post(
        `${process.env.REACT_APP_API_URI}/profile/${this.props.match.params.id}/createOffer`,
        {
            crewNumber,
            boardingLocation,
            destiny,
            costs,
            start,
            estimatedTime,
            description,
            nationality,
            ageCrew,
            journey,
            experience,
            seaMiles,
            offerImage,
            offerCreator,
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
  handleCreateOffer = (event) => {
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
        <h3>Create your Offer</h3>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Crew number:</label>
          <input
            type="text"
            name="crewNumber"
            value={this.state.crewNumber}
            onChange={(e) => this.handleCreateOffer(e)}
          />
          <label>Boarding location:</label>
          <input
          type="text"
            name="boardingLocation"
            value={this.state.boardingLocation}
            onChange={(e) => this.handleCreateOffer(e)}
          />
          <label>Costs:</label>
          <select name="costs" onChange={(e) => this.handleCreateOffer(e)}>
          <option>Choose Type</option>
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
            <option value="contributing">Contributing</option>
          </select>
          <label>Destiny:</label>
          <input
            type="text"
            name="destiny"
            value={this.state.destiny}
            onChange={(e) => this.handleCreateOffer(e)}
          />
          <label>Start:</label>
          <input
            type="text"
            name="start"
            value={this.state.start}
            onChange={(e) => this.handleCreateOffer(e)}
          />
          <label>Estimated time:</label>
          <input
            type="text"
            name="estimatedTime"
            value={this.state.estimatedTime}
            onChange={(e) => this.handleCreateOffer(e)}
          />
          <label>nationality:</label>
          <input
            type="text"
            name="nationality"
            value={this.state.nationality}
            onChange={(e) => this.handleCreateOffer(e)} 
          />
            <label>Description:</label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleCreateOffer(e)}
          />
          <label>Age crew:</label>
          <input
            type="text"
            name="ageCrew"
            value={this.state.ageCrew}
            onChange={(e) => this.handleCreateOffer(e)}
          />
            <label>Journey:</label>
          <select name="journey" onChange={(e) => this.handleCreateOffer(e)}>
          <option>Choose Type</option>
            <option value="tourism">Tourism</option>
            <option value="cruising">Cruising</option>
            <option value="regatta">Regatta</option>
            <option value="charter">Charter</option>
          </select>
          <label>Experience:</label>
          <select name="experience" onChange={(e) => this.handleCreateOffer(e)}>
          <option>Choose Type</option>
            <option value="no required">No required</option>
            <option value="required">Required</option>
          </select>
          <label>Sea  miles:</label>
          <select name="seaMiles" onChange={(e) => this.handleCreateOffer(e)}>
          <option>Choose Type</option>
            <option value="no required">No required</option>
            <option value="more than 100 miles">More than 100 miles</option>
            <option value="more than 1000 miles">More than 1000 miles</option>
            <option value="more than 10000 miles">More than 10000 miles</option>
          </select>
          <label>Image:</label>
          <input
            type="file"
            name="offerImage"
            value={this.state.offerImage}
            onChange={(e) => this.handleCreateOffer(e)}
          />
          <input type="submit" value="Submit" />
        </form>
        <button>
          <Link to={`/profile/user/${this.props.match.params.id}`}>
            Back to my profile
          </Link>
        </button>
      </div>
    );
  }
}
export default withAuth(CreateOffer);
