import React from 'react';
import { generatePassword } from "./../services/password-generator";
import AskForCharType from "./ask-for-char-type";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            strength: 10,
            charTypes: ["abc", "ABC"],
            password: null
        }
        this.onStrengthChange = this.onStrengthChange.bind(this);
        this.onCharTypesChange = this.onCharTypesChange.bind(this);
    }

    onStrengthChange (event){
        event.persist();

        this.setState({
            ...this.state,
            strength: parseInt(event.target.value)
        });
    }

    onCharTypesChange(event){
        event.persist();

        let charType = event.target.value;
        let index = this.state.charTypes.indexOf(charType);

        if(index > -1){
            if(this.state.charTypes.length <= 1){
                alert("Please! I'm the last one :( ");
                return;
            }
            this.state.charTypes.splice(index, 1);
            this.setState({
                ...this.state,
                charTypes: this.state.charTypes
            });
        } else {
            this.setState({
                ...this.state,
                charTypes: [...this.state.charTypes, charType]
            });
        }
    }

    render(){
        let generatedPassword = generatePassword(this.state.charTypes, this.state.strength);
        return (
            <div id="app-body" className="password-generator">

                <h1 className="password-generator--title">
                    Password Generator
                </h1>

                <input
                    className="password-generator--field"
                    readOnly={true}
                    value={generatedPassword} />

                <div className="form-control">
                    <label>
                        Password length/strength
                        ({ this.state.strength })
                    </label>
                    <input
                        className="password-generator--range"
                        type="range"
                        min="8"
                        max="20"
                        step="2"
                        value={this.state.strength}
                        onChange={this.onStrengthChange} />
                </div>

                <AskForCharType
                    charType="upper-case letters"
                    charKey="ABC"
                    onChange={this.onCharTypesChange}
                    checked={this.state.charTypes.indexOf("ABC") > -1}
                />
                <AskForCharType
                    charType="lower-case letters"
                    charKey="abc"
                    onChange={this.onCharTypesChange}
                    checked={this.state.charTypes.indexOf("abc") > -1}
                />
                <AskForCharType
                    charType="numbers"
                    charKey="123"
                    onChange={this.onCharTypesChange}
                    checked={this.state.charTypes.indexOf("123") > -1}
                />

            </div>
        );
    }
};

export default App;