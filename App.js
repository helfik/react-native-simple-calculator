
import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ' ',
        };

        this.getValue = this.getValue.bind(this);
        this.clear = this.clear.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    calculate() {
        let text = this.state.result;

        // тут тоже надо преверить чтобы операция не заканчивалась оператором
        if(text.split('').pop() == '+' || text.split('').pop() == '-' || text.split('').pop() == '*' || text.split('').pop() == '/') return;
        let answer = eval(text);

        // JSON.stringify() пришлось использовать, чтобы полученный ответ опять можно было исполльзовать для продолжения вычислений, иначе ошибка типов данных
        this.setState({ result: JSON.stringify(answer)})

        // а тут я начала второй метод решения с помощью разбивания текста на массив, но он работает в некоторых случаях с ошибкой, поэтому легче просто воспользоваться специальным eval() как в первом варианте

        // let textArr = text.split('+', '-', '*', '/');
        // for(let i = 0; i <= textArr.length; i++) {
        //
        //     if(textArr[i] == '+') {
        //         console.log(textArr[i])
        //         let answer = (parseInt(textArr[i-1]) + parseInt(textArr[i+1]));
        //         this.setState({result: JSON.stringify(answer)});
        //     }
        // }

        // и т.д для других операций
    };

    getValue(text) {
        if(text == '+'){
            // я применила эту проверку, чтобы невозможно было ввести два или больше операторов подряд, например ++ или +- и т.д
            if(this.state.result == ' ' || this.state.result.split('').pop() == '+' || this.state.result.split('').pop() == '-' || this.state.result.split('').pop() == '*' || this.state.result.split('').pop() == '/') return;
            this.setState({result: this.state.result + text})
        } else if(text == '-') {
            if(this.state.result == ' ' || this.state.result.split('').pop() == '+' || this.state.result.split('').pop() == '-' || this.state.result.split('').pop() == '*' || this.state.result.split('').pop() == '/') return;
            this.setState({result: this.state.result + text})
        } else if(text == '*') {
            if(this.state.result == ' ' || this.state.result.split('').pop() == '+' || this.state.result.split('').pop() == '-' || this.state.result.split('').pop() == '*' || this.state.result.split('').pop() == '/') return;
            this.setState({result: this.state.result + text})
        } else if(text == '/') {
            if(this.state.result == ' ' || this.state.result.split('').pop() == '+' || this.state.result.split('').pop() == '-' || this.state.result.split('').pop() == '*' || this.state.result.split('').pop() == '/') return;
            this.setState({result: this.state.result + text})
        } else {
            this.setState({result: this.state.result + text})
        }
    };

    clear() {
        // тут я с помощью js сначала разбила строку на массив, потом взяла последний элемент массива и удалила его, затем снова объединила в строку
        let text = this.state.result.split('');
        text.pop();
        this.setState({result: text.join('')});
    };

    render() {

        const { result } = this.state;

        return (
            <SafeAreaView>
                <View>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.result}>{ result }</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.buttonsCont}>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(1)}>
                                <Text style={styles.buttonText}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(2)}>
                                <Text style={styles.buttonText}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(3)}>
                                <Text style={styles.buttonText}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOp} onPress={() => this.getValue('+')}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsCont}>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(4)}>
                                <Text style={styles.buttonText}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(5)}>
                                <Text style={styles.buttonText}>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(6)}>
                                <Text style={styles.buttonText}>6</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOp} onPress={() => this.getValue('-')}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsCont}>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(7)}>
                                <Text style={styles.buttonText}>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(8)}>
                                <Text style={styles.buttonText}>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(9)}>
                                <Text style={styles.buttonText}>9</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOp} onPress={() => this.getValue('*')}>
                                <Text style={styles.buttonText}>*</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsCont}>
                            <TouchableOpacity style={styles.buttonOp} onPress={this.clear}>
                                <Text style={styles.buttonText}>clear</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.getValue(0)}>
                                <Text style={styles.buttonText}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOp} onPress={this.calculate}>
                                <Text style={styles.buttonText}>=</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOp} onPress={() => this.getValue('/')}>
                                <Text style={styles.buttonText}>/</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#fafafa',
        height: 250,
        width: '100%',
    },

    body: {
        backgroundColor: '#666',
        height: 500,
        width: '100%',
    },

    buttonsCont: {
        flex: 1,
        flexDirection: 'row',
    },

    button: {
        flexDirection: 'column',
        width: '25%',
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        height: '100%',
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        lineHeight: 100,
    },

    buttonOp: {
        flexDirection: 'column',
        width: '25%',
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        height: '100%',
        backgroundColor: '#C7A950',
    },

    result: {
        textAlign: 'right',
        fontSize: 40,
        color: '#000',
        lineHeight: 100,
        marginTop: 100,
        marginRight: 20,
    },
});

export default App;
