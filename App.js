import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';

const name_regex = /^[a-zA-Z ]{2,30}$/;
const email_regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
const mobile_regex=/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/
const url= /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
const dob=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
export default class MyApp extends Component{
      constructor(){
        super();
        this.state = { 
          forms:[]
        }       
      }
      
      validateemail
       addNewForm = () =>{
        this.setState({
          forms: this.state.forms.concat([{name:'',email:'',mobile:'',dob:'',weblink:''}])
        });             
       }
    
        onNameChange = (text,id) =>{

        const new_form = this.state.forms.map((item, key) => {  
          if (id !== key) return item;
          return { ...item, name: text};
        }); 
        this.setState({forms: new_form});
    };
        onEmailChange = (text,id) =>{
        const new_form = this.state.forms.map((item, key) => {
          if (id !== key) return item;
          return { ...item, email:text};
        });
        this.setState({ forms: new_form });
    };
        onMobileChange = (text,id) =>{  
          const new_form = this.state.forms.map((item, key) => {
            if (id !== key) return item;
            return { ...item, mobile:text };
          });
          this.setState({ forms: new_form });
       
    };
        onDobChange = (text,id) =>{
        const new_form = this.state.forms.map((item, key) => {
          if (id !== key) return item;
          return { ...item, dob:text };
        });
        this.setState({ forms: new_form });
      };
        onWeblinkChange =(text,id) =>{
        const new_form = this.state.forms.map((item, key) => {
          if (id !== key) return item;
          return { ...item, weblink: text };
        });
        this.setState({ forms: new_form });
    };
     onSubmit =() =>{
     let completed=true;
     this.state.forms.map((item) => {
        if (!name_regex.test(item.name)||
          !email_regex.test(item.email)||
          !mobile_regex.test(item.mobile)||
          !url.test(item.weblink)||
          !dob.test(item.dob)) 
        completed=false
      });
      if(completed)
        alert('ok')
        else
        alert('Please fill all field')
     };
    render(){
        let render_form = this.state.forms.map(( item, key ) =>{
              return(
                    <View style={{marginTop:20}}>
                      <Text>
                        {`Form ${key + 1}`}
                      </Text>
                      <View style={{borderWidth:2}}>
                        <View style={styles.InputContainer}>
                          <Text style={styles.flex_1}>Name</Text>
                          <TextInput
                              style={styles.flex_1}
                              placeholder={`User #${key + 1} name`}
                              value={item.name}
                              onChangeText={(text)=>this.onNameChange(text,key)}       
                          />
                          <Image source={name_regex.test(item.name)?null:require('./exclamation.png')} style = { {width:20,height:20} }/>
                        </View>  
                        <View style={styles.InputContainer}>
                          <Text style={styles.flex_1}>Email</Text>
                            <TextInput
                              style={styles.flex_1}
                              placeholder={`User #${key + 1} email`}
                              value={item.email}
                              onChangeText={(text)=>this.onEmailChange(text,key)}     
                            />
                             <Image source={email_regex.test(item.email)?null:require('./exclamation.png')} style = { {width:20,height:20} }/>
                          </View>                     
                          <View style={styles.InputContainer}>
                            <Text style={styles.flex_1}>Contact</Text>
                              <TextInput
                                keyboardType = 'numeric'
                                maxLength={10} 
                                style={styles.flex_1}
                                placeholder={`User #${key + 1} mobile no`}
                                value={item.mobile}
                                onChangeText={(text)=>this.onMobileChange(text,key)}      
                                
                             />
                               <Image source={mobile_regex.test(item.mobile)?null:require('./exclamation.png')} style = { {width:20,height:20} }/>
                          </View> 
                          <View style={styles.InputContainer}>
                            <Text style={styles.flex_1}>Weblink</Text>
                              <TextInput
                                style={styles.flex_1}
                                placeholder={`User #${key + 1} weblink`}
                                value={item.weblink}
                                onChangeText={(text)=>this.onWeblinkChange(text,key)}     
                              />
                             <Image source={url.test(item.weblink)?null:require('./exclamation.png')} style = { {width:20,height:20} }/> 
                          </View> 
                          <View style={[styles.InputContainer,{marginBottom:0,borderBottomWidth:0}]}>
                            <Text style={styles.flex_1}>Date of birth</Text>
                              <TextInput
                                style={styles.flex_1}
                                placeholder={`User #${key + 1} Date of birth`}
                                value={item.dob}
                                onChangeText={(text)=>this.onDobChange(text,key)}      
                              />
                                <Image source={dob.test(item.dob)?null:require('./exclamation.png')} style = { {width:20,height:20} }/>
                          </View> 

                        </View>
                    </View>
                
              );
        });
        return(
            <View style = { styles.MainContainer }>
              <TouchableOpacity 
                activeOpacity = { 0.7 } 
                style={{alignSelf:'flex-end'}}
                onPress = { this.addNewForm }>      
                   <Image 
                    source={require('./add.png')} 
                    style = { styles.image }
                    />
                
                </TouchableOpacity>
                <ScrollView>
                    <View style = {{ flex: 1, padding: 2 }}>
                        {render_form}
                    </View>
                </ScrollView>
 
                <TouchableOpacity 
                  activeOpacity = { 0.7 } 
                  style={styles.SubmitButton}
                  onPress = { this.onSubmit}
                  >      
                  <Text style={{alignSelf:"center",color:"#000",fontSize:20}}>Submit</Text>               
                </TouchableOpacity>

            </View>
        );
    }
}
 
const styles = StyleSheet.create({
      MainContainer:{
          flex: 1,
          backgroundColor: '#eee',
          justifyContent: 'center',
          paddingTop: (Platform.OS == 'ios') ? 20 : 0
      },
      flex_1:{
        flex:1
      },
      ButtonStyle:{
      position: 'relative',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      left: 100,
      top: 30,
    },
    InputContainer:{flexDirection:"row",
    alignItems:'center',
    borderBottomWidth:1,
    margin:5,
    borderColor:'grey',
  },
    image: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
  },
  SubmitButton:{width:150,
    padding:5,
    borderWidth:1,
    alignSelf:"center",
    margin:10,
    backgroundColor:'#fff'}
});