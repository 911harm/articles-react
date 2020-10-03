import React, { Component } from 'react'

export default class Contact extends Component {
    user={
        message:React.createRef()
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.user.message.current.value)
    }
    render() {
        return (
            <React.Fragment>
                 <form className="form" onSubmit={this.onSubmit} onChange={this.onSubmit}>
                   <div className="center">
                    
                    <label htmlFor="name">Nombre</label>
                    <input className="inputs-form" type="text" name="name"/>
                   </div>
                   <div className="center">
                   <label htmlFor="email">Email</label>
                       <input className="inputs-form" type="email" name="email"/>
                   </div>
                   <label htmlFor="message">Mensaje</label>
                    <textarea name="message" ref={this.user.message}></textarea>
                    <input id="btn-submit" type="submit" value="Enviar"/>
                </form>
            </React.Fragment>
        )
    }
}
