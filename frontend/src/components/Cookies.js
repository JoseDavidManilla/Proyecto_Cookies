import React, { Component} from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
export default class Cookies extends Component {
  state = {
    cookies: [],
    nombre: '',
    valor: ''
  }

  async componentDidMount() {
  }
  onSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/cookies/setcookies',
      {
        nombre: this.state.nombre,
        valor: this.state.valor
      })
      this.setState({
        cookies: document.cookie.split(";")
    });
    console.log(this.state.cookies)
    console.log(res.config.data)
  };
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <p>POST</p>
        <form onSubmit={this.onSubmit} className="card card-body">
          <div className="form-group">
            <label>Nombre de cookie</label>
            <input name="nombre" id="nombre" onChange={this.onInputChange} value={this.state.nombre} type="text" className="form-control" placeholder="Cookie name" />
          </div>
          <div className="form-group">
            <label>Valor de cookie</label>
            <input name="valor" id="valor" onChange={this.onInputChange} value={this.state.valor} type="text" className="form-control" placeholder="Value of cookie" />
          </div>
          <button type="sumbit" className="btn btn-primary">Guardar</button>
        </form>
        <br />
          <center><h5>Cookie</h5></center>
                <div className="row">
                {
                        this.state.cookies.map(user1 =>(
                    <div className="col-md-4 p-2">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-body">
                        <p>{user1}</p>
                        </div>
                    </div>
                </div>
                        ))
                    }
                </div>
      </div>
    )
  }
}
