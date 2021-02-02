// Library
import React, {Component} from 'react';
import styled from "styled-components";
import axios from 'axios';
// Components
import Header from '../../Containers/Header';
import Footer from '../../Containers/Footer';
import Layout from '../../Containers/Layout';
import Input from "../../Components/Input";

const SSDiv = styled.div`
  width: 100%;
  float: left;
`;
const MainDiv = styled(SSDiv)`
  height: 600px;
`;
const CenterDiv = styled(SSDiv)`
  height: 100px;
  width: 50%;
`;


class HomeScreen extends Component {

    state = {
        location: null,
        locationData: null,
        error: false
    }


    inputHandler = (value) => {
        const state = {...this.state};
        state.location = value;
        this.setState(state);
    }

    getWeatherData = () => {
        const state = {...this.state};
        const city = state.location;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
        axios.get(url)
            .then(res => {
                console.log("RES", res);
                const state = {...this.state};
                state.locationData = res.data;
                this.setState(state);
            })
            .catch(err => {
                console.error(err);
                const state = {...this.state};
                state.error = true;
                state.locationData = null;
                this.setState(state);
            });
    }

    render() {


        console.log("State", this.state);
        return (
            <>
                <Header/>
                <Layout>
                    <MainDiv>
                        <CenterDiv>
                            <Input changer={this.inputHandler}/>
                            <button onClick={this.getWeatherData}>Check</button>
                        </CenterDiv>
                        {this.state.locationData ? (
                            <SSDiv>
                                <h1>{this.state.locationData.name} - {this.state.locationData.weather[0].main}</h1>
                                <span>Feels Like: {this.state.locationData.main.feels_like}</span>
                                <br/>
                                <span>Temperature: {this.state.locationData.main.temp}</span>
                                <br/>
                                <span>Min : {this.state.locationData.main.temp_min}</span>
                                <br/>
                                <span>Max : {this.state.locationData.main.temp_max}</span>
                                <br/>
                                <span>Humidity : {this.state.locationData.main.humidity}</span>
                                <br/>
                                <span>Pressure : {this.state.locationData.main.pressure}</span>
                                <br/>
                            </SSDiv>
                        ) : null}
                        {this.state.error ? (
                            <h2>City Not Found</h2>
                        ) : null}

                    </MainDiv>
                </Layout>
                <Footer/>
            </>
        )
    }
}

export default HomeScreen