import Axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { urlApi } from '../Global';
import {Redirect} from 'react-router-dom';
import logo from '../assets/image/logo.svg';
import Moment from 'react-moment';
import 'moment/locale/es';

export default class Article extends Component {
    state={
        article:{},
        status:""
    }
    componentDidMount(props){
        var id = this.props.match.params.id
        Axios.get(urlApi+'/article/'+id).then(res=>{
            // console.log(res.data)
            this.setState({
                article:res.data.article
            })

        })
    }
    Delete=()=>{
        Axios.delete(urlApi+'article/'+this.state.article._id).then(res=>{
            this.setState({
                status:"success"
            }) 
        })
    }
    render() {
        if(this.state.status==="success"){
            return <Redirect to="/"></Redirect>
         }
        return (
            <article className="article-item">
                            <div className="">
                                {this.state.article.image ?
                                    (<img src={urlApi + "get-image/" + this.state.article.image} alt={this.state.article.title} />)
                                    :(<img src={logo} alt={this.state.article.title} />)
                                }
                                </div>

                            <h2>{this.state.article.title}</h2>

                            <span className="date">
                                <Moment fromNow>{this.state.article.date}</Moment>
                            </span>
                            <div>
                                <p>{this.state.article.content}</p>
                            </div>
                            <div className="btn-articles">
                            <button className="btn " onClick={this.Delete}><i className="fas fa-trash" ></i> Borrar</button>
                            <NavLink className="btn btn-warning" to={"/edit/"+this.state.article._id}><i className="fas fa-edit" ></i> Editar</NavLink>
                            </div>
                        </article>
        )
    }
}
