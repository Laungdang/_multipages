import { useEffect, useState } from "react";
import Variable from "../Variable/Variable";
import './Temperatures.css';

function Temperatures({ name, initCelsius }) {
  const [Celsius, setCelsius] = useState(20);
  const [Fahrenheit, setFahrenheit] = useState(68);  // Proper initial value for 20°C
  const [Kelvin, setKelvin] = useState(293.15);  // Proper initial value for 20°C

  // Set initial values based on initCelsius
  useEffect(() => {
    // Set initial values 
    const celsius = initCelsius || 0;
    setCelsius(celsius);
    setFahrenheit(celsiusToFahrenheit(celsius));
    setKelvin(celsiusToKelvin(celsius));
  }, [initCelsius]);

  // Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  // Convert Celsius to Kelvin
  const celsiusToKelvin = (celsius) => celsius + 273.15;

  // Convert Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

  // Convert Fahrenheit to Kelvin
  const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15;

  // Convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  // Convert Kelvin to Fahrenheit
  const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9/5 + 32;

  // Handle Celsius changes and update other scales
  useEffect(() => {
    const fahrenheit = celsiusToFahrenheit(Celsius);
    const kelvin = celsiusToKelvin(Celsius);

    //ถ้าค่าที่ไม่เท่ากับค่าเดิม จะเรียกใช้ setFahrenheit
    //เช่น fahrenheit ตัวนี้จะเป็นค่าที่เป็นค่าของ celsiusToFahrenheit(Celsius) สมมติว่าเป็นค่า 25
    if (fahrenheit !== Fahrenheit) setFahrenheit(fahrenheit); 
    // 25 ไม่เท่ากับ Fahrenheit --- Fahrenheit ตัวนี้คือค่าเริ่มต้นที่ผมกำหนดไว้คือ initCelsius ในโค้ดผมมันดึงค่ามาจาก App.jsx ที่มีการกำหนดค่าไว้คือ 20 ซึ่งหมายความว่าตอนนี้ Fahrenheit มีค่าเท่ากับ 20
    // if (fahrenheit !== Fahrenheit) setFahrenheit(fahrenheit); หมายความว่า
    // ถ้า 25 ไม่เท่ากับ 20 มันจะทำการ set ค่าของ Fahrenheit ใหม่ โดยใช้คำสี่งนี้ setFahrenheit(fahrenheit); 
    // setFahrenheit(fahrenheit); ตัวนี้ก็เก็บค่า 25 ไปไว้ในตัวแปร Fahrenheit เพราะคำสั่ง setFahrenheit คือการ(setState) ถ้าไม่เข้าใจ คือมันตัวอัพเดตค่าตัวแม่ของมัน ย้อนไปดูบรรทัดที่7 
    // setFahrenheit เอาไว้อัพเดตค่าของ Fahrenheit 

    // ถ้ายัง งง อีก  **fahrenheit กับ Fahrenheit คนละตัวกันนะ**
    
    // ถ้าถามว่ามันเอาค่าไปอัพเดตยังไง ผมให้คิดตามว่า ตอนนี้มีกล่องชื่อ Fahrenheit และมีเครื่องอัพเดตค่าของกล่องคือ setFahrenheit
    // setFahrenheit(fahrenheit); งั้นตรงนี้ก็หมายความว่า อัพเดตค่าของกล่องFahrenheitโดยใช้คำสั่งนี้ setFahrenheit แต่เอาค่า fahrenheit มา 
    // ก็เลยกลายเป็น setFahrenheit(fahrenheit มันก็คือ 25); ถ้าเข้าใจง่ายๆก็ setFahrenheit(25); ถ้าสงสัยว่าทำไมเป็น 25 ให้ดู บรรทัด44 
    // ทีนี้มันก็เอาค่า 25 นี่แหละไปอัพเดตกล่อง Fahrenheit ว่าตอนนี้เอ็งคือ 25 แล้วนะ now Fahrenheit = 25 
    // จากนี้ถ้าค่ามีการเปลี่ยนแปลงอีก สมมติมีค่าใหม่มาคือ 19 (fahrenheit)

    // มันก็จะเอามาเปรียบเทียบ (fahrenheit !== Fahrenheit) ก็คือ 19 ที่เป็นค่าใหม่ กับ 25 ที่เป็นค่าเดิม
    // คือ ถ้า 19 ไม่เท่ากับ 25 ให้ทำ ..... ย้อนกลับไปอ่านบรรทัด47
    // ถ้ายังไม่เข้าใจอีกก็สวดมนต์ได้เลยจ่ะ
    
    //ถ้าค่าที่ไม่เท่ากับค่าเดิม จะเรียกใช้ setKelvin
    if (kelvin !== Kelvin) setKelvin(kelvin);
      // จะทำงานเมื่อ Celsius มีการเปลี่ยนแปลง
  }, [Celsius]);


  // Handle Fahrenheit changes and update other scales
  useEffect(() => {
    const celsius = fahrenheitToCelsius(Fahrenheit);
    const kelvin = fahrenheitToKelvin(Fahrenheit);
    if (celsius !== Celsius) setCelsius(celsius);
    if (kelvin !== Kelvin) setKelvin(kelvin);
  }, [Fahrenheit]);

  // Handle Kelvin changes and update other scales
  useEffect(() => {
    const celsius = kelvinToCelsius(Kelvin);
    const fahrenheit = kelvinToFahrenheit(Kelvin);
    if (celsius !== Celsius) setCelsius(celsius);
    if (fahrenheit !== Fahrenheit) setFahrenheit(fahrenheit);
  }, [Kelvin]);

  
  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">{name || "TEMPERATURES"}</h3>
      <h3 className="temperature-warp">
        <span className="badge bg-primary">{Celsius.toFixed(2)} &deg;C</span>
        <span className="badge bg-primary">{Fahrenheit.toFixed(2)} &deg;F</span>
        <span className="badge bg-primary">{Kelvin.toFixed(2)} &deg;K</span>
      </h3>
      <div className="temperatures-variables">
        <Variable name={'Celsius'} value={Celsius} setValue={setCelsius} />
        <Variable name={'Fahrenheit'} value={Fahrenheit} setValue={setFahrenheit} />
        <Variable name={'Kelvin'} value={Kelvin} setValue={setKelvin} />
      </div>
    </div>
  );
}

export default Temperatures;
