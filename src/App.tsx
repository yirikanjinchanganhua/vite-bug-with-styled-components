import * as mobx from "mobx";
import { observer } from "mobx-react";
import React, { useState } from "react";

import "./App.css";
import BaseComponent from "./BaseComponent";
import Hello from "./Hello";
import logo from "./logo.svg";

@observer
export default class App extends BaseComponent<any, any> {

    @mobx.observable
    public count: number = 0;

    public render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Hello Vite + React!</p>
                    <p>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </p>
                    <p>{this.count}</p>
                    <p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                        {" | "}
                        <a
                            className="App-link"
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite Docs
                        </a>
                    </p>
                </header>
                <Hello />
            </div >
        );
    }
}