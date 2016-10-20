/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    PixelRatio
} from 'react-native';

import outStyle from './ViewStyles';
//获取宽高
var Dimensions = require("Dimensions");
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
//定义对象
var viewStyle = {
    flex: 1,//平分 + 100
    backgroundColor: 'red',
    height: 100,
    width: 100
}
/**
 * 1,五种CSS样式
 * 2,Flex(伸缩)-权重平分(先去掉固定的height再平分)
 * 3,Position(位置) relative:相对于同级标签;
 */
class Index extends Component {
    render() {
        return (
            //1,类名样式
            <View style={{
                flex: 1,
                backgroundColor: 'green',
                flexDirection:'row',//行排列 默认column
                flexWrap:'wrap',//子视图换行   默认nowrap
                //flex-start:从左开始,flex-end:从右开始,center:居中,space-between:之间平分
                justifyContent:'space-around',
                //flex-start:从顶开始,flex-end:从低开始,center:居中,stretch:伸拉
                alignItems:'center'
                // width: ScreenWidth,
                // height: ScreenHeight
            }}>
                {/*练习:2,对象样式*/}
                {/*<View style={viewStyle}/>*/}

                {/*练习3,通过StyleSheet*/}
                {/*<Text style={styles.textContent}>公司倒闭了!</Text>*/}

                {/*练习4,样式拼接*/}
                {/*<Text style={[*/}
                    {/*styles.font,*/}
                    {/*styles.fontColor,*/}
                    {/*{backgroundColor: 'blue'}*/}
                {/*]}>www.baidu.com</Text>*/}

                {/*练习5,引用外部样式*/}
                {/*<View style={outStyle.viewStyle}/>*/}

                {/*练习:position*/}
                {/*<Text style={[styles.size100,styles.viewAbsolute,styles.top10,styles.left10,{backgroundColor:'#222'}]}>1111</Text>*/}
                {/*<Text style={[styles.size100,styles.viewAbsolute,styles.top10,styles.right10,{backgroundColor:'#555'}]}>2222</Text>*/}
                {/*<Text style={[styles.size100,styles.viewAbsolute,styles.bottom10,styles.left10,{backgroundColor:'#999'}]}>3333</Text>*/}
                {/*<Text style={[styles.size100,styles.viewAbsolute,styles.bottom10,styles.right10,{backgroundColor:'#ccc'}]}>4444</Text>*/}

                {/*练习:flexDirection,flexWrap*/}
                {/*<View style={styles.itemView}/>*/}
                {/*<View style={styles.itemView}/>*/}
                {/*<View style={styles.itemView}/>*/}
                {/*<View style={styles.itemView}/>*/}
                {/*<View style={styles.itemView}/>*/}
                {/*<View style={styles.itemView}/>*/}
                {/*<View style={styles.itemView}/>*/}
                {/*<View style={styles.itemView}/>*/}

                {/*练习:alignItems*/}
                {/*<View style={[styles.itemView1,{height:160}]}/>*/}
                {/*练习:alignSelf-独立对齐属性*/}
                {/*<View style={[{height:60,width:100,backgroundColor:'red',alignSelf:'flex-start'}]}/>*/}
                {/*<View style={[styles.itemView1,{height:260}]}/>*/}

                {/*练习*/}
                <View style={styles.subView}>
                    <View style={[styles.flex,styles.rightLine]}>
                        <View style={styles.viewflex}>
                            <Text style={styles.fontText}>酒店</Text>
                        </View>
                    </View>

                    <View style={[styles.flex,styles.rightLine]}>
                        <View style={[styles.viewflex,styles.bottomLine]}>
                            <Text style={styles.fontText}>海外酒店</Text>
                        </View>
                        <View style={[styles.viewflex]}>
                            <Text style={styles.fontText}>特惠酒店</Text>
                        </View>
                    </View>

                    <View style={[styles.flex]}>
                        <View style={[styles.viewflex,styles.bottomLine]}>
                            <Text style={styles.fontText}>团购</Text>
                        </View>
                        <View style={[styles.viewflex]}>
                            <Text style={styles.fontText}>客栈.公寓</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textContent: {
        flex: 1,//平分
        fontSize: 30,
        fontWeight: 'bold',
        color: 'yellow',
        backgroundColor: 'gray'
    },
    itemView:{
        height: 100,
        width: 100,
        backgroundColor:'yellow',
        margin:5,
    },
    itemView1:{
        width: 100,
        backgroundColor:'yellow',
        margin:5,
    },
    subView:{
        position:'absolute',
        height:84,
        top:35,
        left:5,
        right:5,
        backgroundColor:'#3c3f41',
        flexDirection:'row',
        borderRadius:5,
        padding:1
    },
    flex:{
        flex:1,
    },
    viewflex:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    rightLine:{
        borderRightWidth:1,
        borderRightColor:'white'
    },
    bottomLine:{
        borderBottomWidth:1,
        borderBottomColor:'white'
    },
    font: {
        flex: 1,//平分
        fontSize: 16,
    },
    fontText: {
        fontSize: 16,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },
    fontColor: {
        color: 'red'
    },
    size100: {
        height: 100,
        width: 100
    },
    viewRelative: {
        position: 'relative'
    },
    viewAbsolute: {
        position: 'absolute'
    },
    left10:{
        left:10
    },
    right10:{
        right:10
    },
    top10:{
        top:10
    },
    bottom10:{
        bottom:10
    }

});
AppRegistry.registerComponent('HelloWorld', () => Index);
