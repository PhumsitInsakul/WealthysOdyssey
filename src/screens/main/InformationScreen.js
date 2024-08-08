import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const InformationScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0ABAB5' }}>
            <View style={{ flex: 1, padding: '5%' }}>
                <ScrollView>
                    <Text style={{ fontSize: 24, color: '#ffffff', fontWeight: 'bold', marginTop: 20 }}>คะแนนความน่าเชื่อถือ</Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                    คะแนนความน่าเชื่อถือมีตั้งแต่ระดับ 0 คะแนนถึงระดับ 10 คะแนนซึ่งคำนวณจากความถี่ของการบันทึกธุรกรรม เช่น บันทึกรายรับรายจ่าย โดยจะคำนวณตามรอบและในแต่ละรอบมีระยะเวลา 3 วัน ซึ่งคะแนนความน่าเชื่อถือจะถูกบันทึกเมื่อครบ 3 วัน และจะทำการคำนวณเมื่อผู้ใช้เริ่มบันทึกธุรกรรมแรก
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        - บันทึกธุรกรรมครบ 3 วันต่อ 1 รอบ บวก 1 คะแนน
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        - บันทึกธุรกรรมครบ 2 วันต่อ 1 รอบ บวก 0.5 คะแนน
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        - บันทึกธุรกรรมครบ 1 วันต่อ 1 รอบ ลบ 0.5 คะแนน
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        - ไม่บันทึกธุรกรรมเลยต่อ 1 รอบ ลบ 1 คะแนน
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10}}>
                        {'\t\t\t'}ตัวอย่าง นาย ก สมัครเข้าใช้งานแอพวันแรกและบันทึกธุรกรรมแรก วันที่ 14 มกราคม 2567 แสดงว่าวันที่ 14 มกราคม 2567 นาย ก มีคะแนนความน่าเชื่อถือเท่ากับ 0 เพราะยังไม่ครบ 3 วัน ต่อมาวันที่ 15 มกราคม 2567 นาย ก ไม่ได้ทำการบันทึกธุรกรรม และวันที่ 16 มกราคม 2567 นาย ก บันทึกธุรกรรม ดังนั้นวันที่ 17 มกราคม 2567 นาย ก จะมีคะแนนความน่าเชื่อถือเท่ากับ 0.5 คะแนน เพราะบันทึกธุรกรรมครบ 2 วันใน 1 รอบ
                    </Text>
                </ScrollView>
                <View style={{ padding: '5%' }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#ffffff', borderRadius: 8, padding: 15, alignItems: 'center' }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#000000', fontSize: 18 }}>ตกลง</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

