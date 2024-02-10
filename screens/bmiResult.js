import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    StyleSheet
  } from 'react-native';
  import Button from '../components/Button';
  import React, {useEffect, useState} from 'react';

const BmiResult = ({navigation, route}) => {
    const data = route.params?.data;
    console.log(data)
    const name = data?.name 
    const age = data?.age 
    const height = data?.height
    const weight = data?.weight  

    const [selectedButton, setSelectedButton] = useState(null);
    const [bmi, setBmi] = useState(0);
    const [bmiComment, setBmiComment] = useState(null);

    const [maintenanceCalories, setMaintenanceCalories]= useState(null);
    const [deficitCalories, setDeficitCalories]= useState(null);
    const [extremeWeightLossCalories, setExtremeWeightLossCalories]= useState(null);
    const [selectedPlan, setSelectedPlan] = useState();
    const handleButtonPress = (plan) => {
        setSelectedButton(plan);
        
        switch (plan) {
          case 'maintenanceCalories':
          setSelectedPlan(maintenanceCalories)
            break;
          case 'deficitCalories':
            setSelectedPlan(deficitCalories)
              break;

          case 'extremeWeightLossCalories':
            setSelectedPlan(extremeWeightLossCalories)
            break;
          default:
            setSelectedPlan(maintenanceCalories)
        }
      };

    const calculateBMI = () => {
      if (data) {
        const heightInMeters = data.height / 100;
        const bmi = data.weight / (heightInMeters * heightInMeters);
        return bmi.toFixed(2);
      }
      return null;
    };
  
    const commentBMI = (bmiResult) => {
      if (bmiResult <= 18.5) {
        return "Underweight";
      } else if (bmiResult > 18.5 && bmiResult <= 24.9) {
        return "Normal weight";
      } else if (bmiResult > 25.0 && bmiResult <= 29.9) {
        return "Overweight";
      } else if (bmiResult >= 30) {
        return "Obese";
      }
    };
    

    const calculateBMR = () => {
      if (data) {
        const weightInKg = data.weight;
        const heightInCm = data.height;
        const age = data.age;
  
        let bmr;
        if (data.gender === "Male") {
          bmr = 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * age;
        } else {
          bmr = 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * age;
        }
  
        return bmr.toFixed(2);
      }
      return null;
    };
  
    const calculateMaintenanceCalories = (bmr, activityFactor) => {
      if (bmr) {
        const maintenanceCalories = bmr * activityFactor;
        return maintenanceCalories.toFixed(2);
      }
      return null;
    };
  
    const calculateCaloricDeficit = (maintenanceCalories, deficitPercentage) => {
      if (maintenanceCalories) {
        const deficitCalories = maintenanceCalories * (deficitPercentage / 100);
        return (maintenanceCalories - deficitCalories).toFixed(2);
      }
      return null;
    };

    const handleSave = ()=>{
      console.log('selected plaan', selectedPlan)
      navigation.navigate('plan', {calories:selectedPlan})
    }
  

    useEffect( ()=>{
      const bmiResult = calculateBMI()
      setBmi(bmiResult)
      const bmiComment = commentBMI(bmiResult)
      setBmiComment(bmiComment)
      const bmr = calculateBMR();
      const maintenanceCalories = calculateMaintenanceCalories(bmr, 1.12);
      setMaintenanceCalories(maintenanceCalories)
      const weightLossCalories = calculateCaloricDeficit(maintenanceCalories, 10);
      setDeficitCalories(weightLossCalories)

      const extremeWeightLossCalories = calculateCaloricDeficit(
        maintenanceCalories,
        20
      );
      setExtremeWeightLossCalories(extremeWeightLossCalories)
    },[data] );

   
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <View style={{flex:1, marginVertical:2, marginHorizontal:20,paddingVertical:2}}>
            <Text style={styles.title}>Result details</Text>
            <View style={styles.row}>
                <Text style={styles.label}>name:</Text>
                <Text style={styles.result}>{name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Gender:</Text>
                <Text style= {styles.result}>male</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.result}>{age}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>height</Text>
                <Text style={styles.result}>{height} cm</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Weight</Text>
                <Text style={styles.result}>{weight} kg</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>BMI</Text>
                <Text style={styles.result}> {bmi} </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Comment</Text>
                <Text style={styles.result}> {bmiComment}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>BMR</Text>
                <Text style={styles.result}>250.34</Text>
            </View>
            <Text style={styles.title}>Choose your plan</Text>
            <View style={{...styles.container, ...styles.buttonsContainer}}>
              {
                maintenanceCalories &&(
                  <TouchableOpacity
                  style={[styles.button, selectedButton === 'maintenanceCalories' && styles.selectedButton]}
                  onPress={() => handleButtonPress('maintenanceCalories')}
              >
                  <Text style={selectedButton === 'maintenanceCalories'?  styles.selectedButtonText : styles.buttonText}>Weight Loss Calories: {maintenanceCalories}</Text>
              </TouchableOpacity>
                )
              }

            {deficitCalories &&(
            <TouchableOpacity
                style={[styles.button, selectedButton === 'deficitCalories' && styles.selectedButton]}
                onPress={() => handleButtonPress('deficitCalories')}
            >
                <Text style={selectedButton === 'deficitCalories'?  styles.selectedButtonText : styles.buttonText}>Maintenance Calories: {deficitCalories} </Text>
            </TouchableOpacity>
            )}
            {extremeWeightLossCalories &&(
            <TouchableOpacity
                style={[styles.button, selectedButton === 'extremeWeightLossCalories' && styles.selectedButton]}
                onPress={() => handleButtonPress('extremeWeightLossCalories')}
            >
                <Text style={selectedButton === 'extremeWeightLossCalories'?  styles.selectedButtonText : styles.buttonText}>Maintenance Calories: {extremeWeightLossCalories} </Text>
            </TouchableOpacity>
            )}

        </View>
        </View>
        <View style={styles.footerContainer}>
            <Button
                title="save "
                onPress={handleSave}
                filled
                style={{
                marginTop: 24,
                marginBottom: 4,
                width:'100%'
                }}
            />
        </View>
        
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
    footerContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding:10,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
     
      },
      label:{

        color:'black',
        // fontFamily:'Inter',
        fontWeight:'bold',
        fontSize:14,
        borderRadius:20
      },
      result:{
        
        color:'blue',
        // fontFamily:'Inter',
        fontSize:14,
        borderRadius:20
      },
      row:{

        justifyContent:'space-between',
        flexDirection: "row",
        lineHeight:12
      },
      buttonsContainer:{
        gap:8
      },
      button: {
        backgroundColor: 'white',
        borderColor:'#8a3ffc',
        borderWidth:1,
        padding: 10,
        borderRadius: 15,
      },
      selectedButton: {
        backgroundColor: '#8a3ffc',
      },
      selectedButtonText: {
        color: '#fff',
        textAlign: 'center',
      },
      buttonText: {
        color: '#8a3ffc',
        textAlign: 'center',
      },
      container: {

        paddingHorizontal: 12,
        marginHorizontal:30,
        backgroundColor:'white', 
        borderRadius:5,
        marginBottom:20,
        paddingVertical:20
     
      },
      title:{
        color:'#8a3ffc',
        fontSize:20, 
        // fontFamily:'Inter',
        fontWeight:'bold',  
        borderBottomColor:'grey',
        borderBottomWidth:2,
        marginVertical:20
      }
})

export default BmiResult