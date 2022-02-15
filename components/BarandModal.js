import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Modal,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';
import React, { Component } from 'react';


const deviceHeigth = Dimensions.get('window').height

export class BarandsBottomPop extends Component {


    constructor(props) {
        super(props)
        this.state = {
            show: false,
            barandNames:''
        }
    }
    show = () => {
        this.setState({ show: true })
    }
    close = () => {
        this.setState({ show: false })
    }
    renderOuteSideTouchble(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }}></View>
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const { title } = this.props
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: '400', marginTop: 10, marginBottom: 30 }}>

                    {title}
                </Text>

            </View>

        )
    }
    renderContent = () => {
        const { data } = this.props
        return (
            <View>
                <FlatList
                    

                    style={{ marginBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }

                    }
                />

            </View>

        )
    }
    renderItem = ({ item }) => {
        return (
            < View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity 
                      onPress={() => {
                       this.close()
                       this.state.barandNames=item.name
                       console.log(this.state.barandNames)
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#182E44' }}>{item.name}</Text>
                </TouchableOpacity>

            </View >
        )
    }
    renderSeparator = () => {
        return (
            < View style={{ opacity: 0.1, backgroundColor: '#182F44', height: 1 }}>

            </View >
        )
    }
    render() {
        let { show } = this.state
        const { onTouchouteSide, title } = this.props
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View
                    style={{ flex: 1, backgroundColor: '#00000AA', justifyContent: 'flex-end' }}
                >
                    {this.renderOuteSideTouchble(onTouchouteSide)}
                    <View style={{ width: '100%', backgroundColor: 'gray', borderTopRightRadius: 10, borderTopLeftRadius: 10, paddingHorizontal: 10, maxHeight: deviceHeigth * 0.4 }}>

                        {this.renderTitle()}
                        {this.renderContent()}

                    </View>

                </View>
            </Modal>
        )
    }
}