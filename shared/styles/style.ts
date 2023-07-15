import { StyleSheet } from "react-native";
import { blue, primary, waterBlue, white } from "../colors";
import { origin } from "../spacing";

 const styles = StyleSheet.create({
  circleAvatar: {
    width: 53, 
    height: 53,
    borderRadius: 100,

  },
  flexRowCenter: 
    { flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center'}
  ,
  // containers
  container: {
    flex: 1,
    backgroundColor: blue,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  


  mainContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },


  

  // Text
  displayMedium: {
    color: '#000',
    fontWeight: '400',
    fontSize: 50,
    
  },
  titleLarge: {
    color: primary, 
    fontWeight: 'bold',
    fontSize: 34,
    letterSpacing: -0.02
  },
  titleMedium: {
    color: white,
    fontWeight: '400',
    fontSize: 28, 
 
  },
  titleSmall: {
    color: white,
    fontWeight: '400',
    fontSize: 24, 
    letterSpacing: -0.02

  },
  bodyLarge: {
    color: white, 
    fontSize: 19, 
    fontWeight: '400',
  },
  bodyMedium: {
    color: white,
    fontSize: 16,
    fontWeight: "normal"
  },

  labelLarge: {
    color: white,
    fontSize: 14,
    fontWeight: '400',
  },
  labelMedium: {
    color: '#000',
    fontSize: 13,
    fontWeight: '400',
  },
  //  border
  mainBorder: {
    borderRadius: origin
  },

  // paddings
  verticalMain: {
    paddingTop: 18,
    paddingBottom: 12,
  },

// custom
// text input
input: {
  width: '100%',
  // paddingLeft: 40
},

// bar
bar: {
  width: origin,
  backgroundColor: waterBlue,
  borderRadius: origin,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
},

// dropdown 

dropdownButtonText: {
  fontSize: 16,
},
dropdownOptions: {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  zIndex: 100,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  marginTop: 5,
  backgroundColor: '#fff',
},
dropdownOption: {
  padding: 10,
},


  // common
  
  betweenCenter: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
}); 
export default styles


export const mergeStyle = (...styles) => {

  return [...styles]
}