import React from 'react'
import {Text,View} from 'react-native'
export default class SearchScreen extends React.Component{
    componentDidMount=async()=>{
        const query=await db.collection('transaction').get()
        query.docs.map((doc)=>{
            this.setState({
                allTransactions:[...this.state.allTransactions,doc.data()]
            })
        })
    }
render(){
    return(
<View style={{justifyContent:'center', alignItems:'center'}}>
    <Text>Search</Text>
</View>
)
}
}