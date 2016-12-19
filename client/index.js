/**
 * Created by vlad on 03/12/2016.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

//COMPONETNS
import Layout from "./components/layout"
import store from "./store"


ReactDOM.render(
    <Provider store={store}>
    <Layout />
    </Provider>
    , document.getElementById('page'));
