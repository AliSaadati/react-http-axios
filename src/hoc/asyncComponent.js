import React, { Component } from 'react'

const asynComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentWillMount() {
            importComponent()
                .then(cmp => {
                     
                });
        }
        render() {

        }
    }
}