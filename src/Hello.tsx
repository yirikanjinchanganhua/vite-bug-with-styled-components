import * as mobx from "mobx";
import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";

import BaseComponent from "./BaseComponent";
import "./Hello.less";
import logo from "./logo.svg";

@observer
export default class Hello extends BaseComponent<any, any> {

    @mobx.observable
    public title: string = "Hello Vite";

    public render() {
        return (
            <Content>
                <h1 className="text">{this.title}</h1>
            </Content>
            //     <div>
            //      <h1 className="text">{this.title}</h1>
            //     </div>
        );
    }
}

const Content = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
