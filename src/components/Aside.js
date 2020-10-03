import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Aside extends Component {
    search=React.createRef();
    state={
        search:""
    }
    onChange=()=>{
        this.setState({
            search:this.search.current.value
        })
    }
    render() {
        return (
            <aside id="sidebar">
            <div id="nav-blog" className="sidebar-item">

                <h3>Pudes hacer esto</h3>
                <NavLink to="/add">Crear Articulo</NavLink>

            </div>
            <div id="search" className="sidebar-item">

                <h3>Buscador</h3>
                <p>Encuentra el articulo que buscas</p>
                    
                        <input type="text" name="search" ref={this.search} onChange={this.onChange}/>
                        <NavLink className="btn" to={"/busqueda/"+this.state.search}><i className="fas fa-search" ></i> Buscar</NavLink>
                   

            </div>
        </aside>
        )
    }
}
