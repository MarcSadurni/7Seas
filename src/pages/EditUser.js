import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from 'axios';





class EditUser extends Component {
    // definimos constructor y super para utilizar los props que recibirÃ¡ este componente (opcional)
    constructor(props) {
        super(props);    
        // definimos nuestro state con las keys del project que estaremos editando (title y description)
        this.state = {
            // ya que preveemos que recibiremos por props una variable con el project a editar, nos adelantaremos y lo llamaremos 'theProject'
            username: this.props.username,
            age: this.props.age,
            gender: this.props.gender,
            disponibility: this.props.disponibility,
            email: this.props.email,
            languages: this.props.languages,
            country: this.props.country,
            city: this.props.city,
            experience: this.props.experience,
            lookinForSailAsCrew: this.props.lookinForSailAsCrew,
            image: this.props.image

        }
    };
    // definimos un mÃ©todo que se encargue del submit de nuestro form de ediciÃ³n
    handleFormSubmit = (event) => {
        // 1ro -  declaramos dos variables con los valores de nuestras keys del state (title y descripcion)
        event.preventDefault();
        let { username, age, gender, disponibility, email, languages, country, city, experience, lookinForSailAsCrew, image} = this.state;
        // 2do - evitamos el comportamiento default al hacer el submit de un formulario.
        
        // 3ro - realizamos una llamada axios a nuestra ruta PUT del back encargada de actualizar nuestros projects, y le pasamos nuestras variables antes definidas para poder actualizar.
       
        axios   
          .put(`http://localhost:4000/profile/${this.props.match.params.id}/editUser`, {
            
              username,
              age,
              gender,
              disponibility,
              email,
              languages,
              country,
              city,
              experience,
              lookinForSailAsCrew,
              image
          })
          .then(() => {
            // 4to - 'then', ejecutaremos el mÃ©todo 'getSingleProject' declarado en el componente padre de EditProject (es decir, ProjectDetails) que nos llega a travÃ©s de props como 'getTheProject'...
            // this.props.getTheUser();
            // ... y luego redirigimos a nuestra ruta '/projects'
            this.props.history.push(`/profile/${this.props.match.params.id}`);
          })
          // 5to - en caso de haber un error, lo atrapamos y mostramos en consola
          .catch(error => console.log(error));
    };  
    handleChangeUser = (event) =>{
        const {name, value}=event.target
        this.setState({
            [name] : value
        })
    }
   
  
    render() {
        // retornamos en el render un form que ejecute, al hacer submit, la funciÃ³n que se encarga de ello y que, para cada input ejecute, ante algÃºn cambio, las funciones antes declaradas que de ello se encargan (recordar que el componente debiera ser controlado, lo que harÃ¡ que el value de cada input 'venga' del valor correspondiente del state).
        // por Ãºltimo, agregamos un input de tipo 'submit'
        return (
          <div>
            <hr />
            <h3>Edit User</h3>
            <form onSubmit={this.handleFormSubmit} enctype="multipart/form-data">
            <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleChangeUser(e)}
                   
                />
                 <label>Age:</label>
                <input 
                    name="age"
                    value={this.state.age}
                    onChange={e => this.handleChangeUser(e)}
                   />
                    <label>Gender:</label>
                    <select name="gender" onChange={e => this.handleChangeUser(e)}>
                    <option value="male">Male</option> 
                    <option value="female">Female</option>
                    
                    </select>
                 <label>Disponibility:</label>
                    <input
                        type="text"
                        name="disponibility"
                        value={this.state.disponibility}
                        onChange={e => this.handleChangeUser(e)}
                />
                 <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.handleChangeUser(e)}
                />
                 <label>Languages:</label>
                    <input
                        type="text"
                        name="languages"
                        value={this.state.languajes}
                        onChange={e => this.handleChangeUser(e)}
                />
                 <label>Country:</label>
                    <input
                        type="text"
                        name="country"
                        value={this.state.country}
                        onChange={e => this.handleChangeUser(e)}
                />
                 <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={this.state.city}
                        onChange={e => this.handleChangeUser(e)}
                />
                <label>Experience</label>
                 <select name="experience" onChange={e => this.handleChangeUser(e)}>
                    <option value="low">Low</option> 
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                 <label>Looking For Sail As Crew:</label>
                    <input
                        type="checkbox"
                        value={this.state.lookinForSailAsCrew}
                        onChange={e => this.handleChangeUser(e)}
                />
                 <label>Image:</label>
                    <input
                        type="file"
                        name="image"
                        value={this.state.image}
                        onChange={e => this.handleChangeUser(e)}
                />
                <input type="submit" value="Submit" />
            </form>
            <button><Link to={`/profile/${this.props.match.params.id}`}>Back to my profile</Link></button>
          </div>
        );
    }    
}
export default withAuth(EditUser);