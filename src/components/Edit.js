import React, { Component } from 'react';
import Axios from 'axios';
// import { NavLink } from 'react-router-dom';
import { urlApi } from '../Global';
import { Redirect } from 'react-router-dom';
import logo from '../assets/image/logo.svg';

export default class Edit extends Component {
    title = React.createRef()
    content = React.createRef()
    img = null
    ArticleId
    state = {
        article: {},
        status: ""
    }
    componentDidMount(props) {
        var id = this.props.match.params.id
        this.ArticleId=id
        Axios.get(urlApi + '/article/' + id).then(res => {
            this.setState({
                article: res.data.article
            })
            // this.ImgRef=res.data.article.image
            // console.log(this.ImgRef)
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        Axios.put(urlApi+"article/"+this.ArticleId, this.state.article).then(res => {
            if (this.img !=null) {
                const Data = new FormData();
                Data.append(
                    "file0",
                    this.img,
                    this.img.name
                )
                Axios.post(urlApi + '/image-upload/' + this.ArticleId, Data).then(res => {
                    // console.log(res)
                    this.setState({
                        status: "success"
                    })

                })
            } else {
                this.setState({
                    status: 'success'
                })
            }
            

        })
    }
    onChange = () => {
        this.setState({
            article:{
                title:this.title.current.value,
                content:this.content.current.value,
                image:this.state.article.image
            }
        })
    }
    onChangeImage = (e) => {
        this.img = e.target.files[0]
    }
    render() {
        if (this.state.status === "success") {
            return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <React.Fragment>
                    <form className="form" onSubmit={this.onSubmit} onChange={this.onChange}>
                        <div className="center">

                            <label htmlFor="name">Titulo</label>
                            <input className="inputs-form" type="text" name="name" ref={this.title} defaultValue={this.state.article.title} />
                        </div>

                        <div className="center">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.content} defaultValue={this.state.article.content}></textarea>
                        </div>

                        <div className="center">
                            <div className="image-small">
                                {this.state.article.image ?
                                    (<img src={urlApi + "get-image/" +this.state.article.image} alt={this.state.article.title} />)
                                    : (<img src={logo} alt={this.state.article.title} />)
                                }
                            </div>
                            <label htmlFor="file0">Cambiar imagen</label>
                            <input className="inputs-form" type="file" name="file0" onChange={this.onChangeImage} />
                        </div>

                        <input id="btn-submit" type="submit" value="Enviar" />
                    </form>
                </React.Fragment>
            </div>
        )
    }
}
