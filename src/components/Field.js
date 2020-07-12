import React from 'react';
import LanguageContext from '../context/LanguageContext'
export default class Field extends React.Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Ten' 
        return(
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}