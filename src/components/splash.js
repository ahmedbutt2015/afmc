import React from 'react';
import {
    ScrollView,StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'
export default class Splash extends React.Component {


     chartConfigs = [
        {
            backgroundColor: '#000000',
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            style: {
                borderRadius: 16
            }
        },
        {
            backgroundColor: '#022173',
            backgroundGradientFrom: '#022173',
            backgroundGradientTo: '#1b3fa0',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            }
        },
        {
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
        },
        {
            backgroundColor: '#26872a',
            backgroundGradientFrom: '#43a047',
            backgroundGradientTo: '#66bb6a',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            }
        },
        {
            backgroundColor: '#000000',
            backgroundGradientFrom: '#000000',
            backgroundGradientTo: '#000000',
            color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
        }, {
            backgroundColor: '#0091EA',
            backgroundGradientFrom: '#0091EA',
            backgroundGradientTo: '#0091EA',
            color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
        },
        {
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            }
        },
        {
            backgroundColor: '#b90602',
            backgroundGradientFrom: '#e53935',
            backgroundGradientTo: '#ef5350',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            }
        },
        {
            backgroundColor: '#ff3e03',
            backgroundGradientFrom: '#ff3e03',
            backgroundGradientTo: '#ff3e03',
            color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
        }
    ]
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    render() {
        const width = Dimensions.get('window').width
        const height = 220
        return (
            <View>
                <StatusBar backgroundColor="black" />

                <View style={styles.leftContainer2}>
                    <Text style={[styles.text, {textAlign: 'left',marginLeft: 15}]}>
                        Corrected Weight - Deck Landing
                    </Text>
                </View>
                <View style={[{flexDirection:'row', alignItems:'center'}]}>

                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                },

                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width / 2 - 10} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            marginLeft: 10
                        }}
                    />
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                },

                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width / 2 - 10} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                marginLeft:10
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            marginLeft: 10
                        }}
                    />
                </View>
            </View>

        );
    }

    onLoginBtn() {
        Actions.login()
    }
    onRegisterBtn() {
        Actions.register()
    }

}

const styles = StyleSheet.create({

    leftContainer2: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b3b1a8',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
