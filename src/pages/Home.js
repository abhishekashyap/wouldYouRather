import React, { Component } from 'react'
import Question from '../components/Home/Question'

export default class Home extends Component {
    render() {
        return (
            <div className='section'>
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
        )
    }
}
