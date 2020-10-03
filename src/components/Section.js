import React, { Component } from 'react'
import axios from 'axios';
import { urlApi } from '../Global';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/es';
import logo from '../assets/image/logo.svg';

export default class Section extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        axios.get(urlApi + "articles/3").then(res => {
            // console.log(res.data.articles)
            this.setState({
                articles: res.data.articles
            })
        })
    }


    render() {
        return (
            <React.Fragment>


                <h2>{this.props.title}</h2>

                {this.state.articles.map(article => {
                    return (
                        <article className="article-item" key={article._id}>
                            <div className="image-wrap">
                                {article.image ?
                                    (<img src={urlApi + "get-image/" + article.image} alt={article.title} />)
                                    :(<img src={logo} alt={article.title} />)
                                }
                            </div>

                            <h2>{article.title}</h2>

                            <span className="date">
                                <Moment fromNow>{article.date}</Moment>
                            </span>

                            <NavLink to={"/blog/"+article._id}>Leer más</NavLink>
                        </article>
                    )
                })

                }

            </React.Fragment>
        )
    }
}
