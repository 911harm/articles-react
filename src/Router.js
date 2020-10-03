import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Slider from './components/Slider';
import Section from './components/Section';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Aside from './components/Aside';
import Error from './components/Error';
import Footer from './components/Footer';
import Add from './components/Add';
import Article from './components/Article';
import Edit from './components/Edit';
import Search from './components/Search';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Slider size="slider" />
                    <div className="center">
                        <section id="content">
                            <Switch>
                                <Route exact path="/" render={() => (<Section title="Ultimos 3 Articulos" />)} />
                                <Route exact path="/home" render={() => (<Section title="Ultimos 3 Articulos" />)} />
                                <Route exact path="/blog/" component={Blog} />
                                <Route exact path="/blog/:id" component={Article} />
                                <Route exact path="/edit/:id" component={Edit} />
                                <Route exact path="/busqueda/:search?" component={Search} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/add" component={Add} />
                                <Route component={Error} />

                            </Switch>
                        </section>
                            <Aside />
                            </div>
                        <div className="clearfix"></div>
                        <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
