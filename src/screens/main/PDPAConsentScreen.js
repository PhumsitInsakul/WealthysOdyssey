import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const PDPAConsentScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0ABAB5' }}>
            <View style={{ flex: 1, padding: '5%' }}>
                <ScrollView>
                    <Text style={{ fontSize: 24, color: '#ffffff', fontWeight: 'bold', marginTop: 20 }}>Privacy Policy</Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        Welcome to Wealthy's Odyssey! This privacy policy explains how we collect, use, disclose, and protect your information when you use our application. Please read the following information carefully to understand how we handle your personal data:
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        1. Data Collection: We may collect information you provide directly, such as your name, email address, phone number, login credentials, financial information, and other data relevant to our services.
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        2. Use of Data: The data we collect will be used to improve our services to you, such as managing your account, enhancing service quality, sending updates, or special offers.
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        3. Data Disclosure: We do not disclose your personal data to third parties. All personal data is kept confidential and used solely for the purposes outlined in this policy.
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        4. Data Security: We implement appropriate security measures to protect your information from unauthorized access, use, or disclosure.
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        5. Your Data Rights: You have the right to access, correct, or delete your personal data as required by law, and can contact us through the provided channels in the application.
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        6. Policy Changes: We reserve the right to update or amend this privacy policy periodically, with changes being posted on our application.
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        If you have any questions or concerns about this privacy policy, please contact us at wealthysodyssey@gmail.com.
                    </Text>

                    <Text style={{ fontSize: 24, color: '#ffffff', fontWeight: 'bold' }}>นโยบายความเป็นส่วนตัว</Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        ยินดีต้อนรับสู่แอปพลิเคชันผู้เจริญผจญภัย! นโยบายความเป็นส่วนตัวนี้อธิบายวิธีที่เรารวบรวม ใช้ เปิดเผย และปกป้องข้อมูลของคุณเมื่อคุณใช้แอปพลิเคชันของเรา โปรดอ่านข้อมูลดังต่อไปนี้อย่างละเอียดเพื่อทำความเข้าใจเกี่ยวกับวิธีที่เราจัดการข้อมูลส่วนบุคคลของคุณ:
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        1. การรวบรวมข้อมูล: เราอาจรวบรวมข้อมูลที่คุณให้มาโดยตรง เช่น ชื่อ ที่อยู่อีเมล หมายเลขโทรศัพท์ ข้อมูลการเข้าสู่ระบบ ข้อมูลทางการเงิน และข้อมูลอื่น ๆ ที่เกี่ยวข้องกับการใช้บริการของเรา
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        2. การใช้ข้อมูล: ข้อมูลที่เรารวบรวมจะถูกใช้เพื่อวัตถุประสงค์ในการให้บริการที่ดีขึ้นแก่คุณ เช่น การจัดการบัญชีผู้ใช้ การปรับปรุงคุณภาพบริการ การส่งข้อมูลอัปเดต หรือข้อเสนอพิเศษ
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        3. การเปิดเผยข้อมูล: เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณให้กับบุคคลที่สาม ข้อมูลส่วนบุคคลทั้งหมดจะถูกเก็บเป็นความลับและใช้เฉพาะตามวัตถุประสงค์ที่ระบุในนโยบายนี้
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        4. การรักษาความปลอดภัย: เรามีมาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณจากการเข้าถึง การใช้ หรือการเปิดเผยโดยไม่ได้รับอนุญาต
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        5. สิทธิเกี่ยวกับข้อมูลส่วนบุคคล: คุณมีสิทธิเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณตามที่กฎหมายกำหนด และสามารถติดต่อเราผ่านช่องทางที่ระบุในแอปพลิเคชัน
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        6. การเปลี่ยนแปลงนโยบาย: เราขอสงวนสิทธิ์ในการปรับปรุงหรือแก้ไขนโยบายความเป็นส่วนตัวนี้เป็นระยะ ๆ โดยจะประกาศการเปลี่ยนแปลงบนแอปพลิเคชันของเรา
                    </Text>
                    <Text style={{ fontSize: 16, color: '#ffffff', marginVertical: 10 }}>
                        หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเราที่ wealthysodyssey@gmail.com
                    </Text>
                </ScrollView>
                <View style={{ padding: '5%' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#ffffff', borderRadius: 8, padding: 15, alignItems: 'center' }}
                        onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={{ color: '#000000', fontSize: 18 }}>I Agree</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 10, alignItems: 'center' }}
                        onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#ffffff', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
