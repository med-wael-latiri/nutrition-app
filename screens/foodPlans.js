import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    StyleSheet,
    FlatList
  } from 'react-native';
  import Button from '../components/Button';
  import React, {useState} from 'react';
  import MealCard from '../components/MealCard';

const FoodPlans = ({navigation}) => {
    const [mealList, setMealList]= useState([
        {breakfast: "Oatmeal with almond milk, chia seeds, sliced strawberries",
        description: "Follow this plan for a week of high-fiber meals and snacks tailored to support healthy blood sugar levels.",
        dinner: 'Stir-fried tofu or chicken with broccoli, bell peppers, snap peas", "Quinoa or brown rice',
        id: "IDGoE0Z7GlulFsYpyGIX",
        image: "https://www.eatingwell.com/thmb/ytIpK2B2LDmn2RWsBMah0qmuQT8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/one-pot-garlicky-shrimp-and-broccoli-c3575c22923b4f5b814c704a5dcc316d.jpg",
        lunch: "Turkey or tofu lettuce wraps with assorted veggies",
        title: "Another Meal Plan for you"},
        {
            breakfast: "1 serving Salsa Scrambled Eggs 1 medium banana",
            description: "No-Sugar High-Protein Vegetarian Meal Plan",
            dinner: "1 serving Slow-Cooker Vegetable Stew Daily Totals: 1,497 calories, 60g fat, 77g protein, 172g carbohydrate, 28g fiber, 1,800mg sodium  Make it 1,200 calories: Omit banana at breakfast, string cheese at A.M. snack and yogurt at lunch.  Make it 2,000 calories: Add 1 serving Raspberry-Kefir Power Smoothie to breakfast and add 1 serving Peanut Butter & Hemp Banana to P.M. snack.",
            id: "SH0kpLQRAjN5FtLbTVBa",
            image: "https://www.eatingwell.com/thmb/nZ9IYenV1FPzQYjw7iifIpNjBzc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4572432-542a2a1b6c98477480ec4e17c1851b7f.jpg",
            lunch: "1 serving White Bean & Veggie Salad ¾ cup low-fat plain strained Greek-style yogurt ¼ cup raspberries",
            title: "No-Sugar plan"
        }
    ])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <View style={{ marginVertical: 10, gap: 4 }}>
        <FlatList
            data={mealList}
            style={{marginHorizontal:20, marginBottom:60}}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MealCard  meal={item} handlePress={()=>{navigation.navigate('mealDetail', {meal: item})}}/>
            )}
          />
        </View>
    </SafeAreaView>
  )
}

export default FoodPlans