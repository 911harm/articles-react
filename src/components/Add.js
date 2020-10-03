import Axios from 'axios'
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { urlApi } from '../Global';

export default class Add extends Component {

    title = React.createRef()
    content = React.createRef()
    img = null
    state = {
        article: {},
        status:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.article)
        Axios.post(urlApi + "save", this.state.article).then(res => {
            // console.log(res.data.article)
            this.setState({
                article: res.data.article,
                status: "wainting"
            })
            if (this.img) {
                const Data = new FormData();
                Data.append(
                    "file0",
                    this.img,
                    this.img.name
                )
                Axios.post(urlApi + '/image-upload/' + this.state.article._id,Data).then(res=>{
                    // console.log(res)
                    this.setState({
                        status: "success"
                    })
                })
            }else{
                this.setState({
                    status: 'success'
                })
            }

        })
    }
    onChange = () => {
        this.setState({
            article:
            {
                title: this.title.current.value,
                content: this.content.current.value
            }
        })
    }
    onChangeImage = (e) => {
        this.img = e.target.files[0]
    }
    render() {
        if(this.state.status==="success"){
           return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <React.Fragment>
                    <form className="form" onSubmit={this.onSubmit} onChange={this.onChange}>
                        <div className="center">

                            <label htmlFor="name">Titulo</label>
                            <input className="inputs-form" type="text" name="name" ref={this.title} />
                        </div>

                        <div className="center">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.content}></textarea>
                        </div>

                        <div className="center">

                            <label htmlFor="file0">Imagen</label>
                            <input className="inputs-form" type="file" name="file0" onChange={this.onChangeImage} />
                        </div>

                        <input id="btn-submit" type="submit" value="Enviar" />
                    </form>
                </React.Fragment>
            </div>
        )
    }
}
