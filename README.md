# Crypto Dash ![Logo](https://github.com/hwr7dd/cryptdash/blob/main/logosmall.png) 

**CryptoDash** is a IoT (Internet of Things) dashboarding software based around:

- **React Native** for the **front end**

- **NodeJs** for the **backend/server**

- **MongoDb** for **IoT sensor data**

- **PostgreSQL** for **relational data**


**⚛️React Native** is used due to it's fast development time and ability to scale to a variety of different devices easily

**🖥️NodeJs** is used because the rest of this project is coded using **Javascript**

**🍃MongoDB** is used because we are streaming large amounts of sensor data  

**🐘 PostgreSQL** is used because most of the relational data can be queried better using a relational database 
 
**ⓢ Solana** is used to encrypt messaging between your device and NodeJs



The concept behind this project is that there should be extra attention paid to security when there is a potential for someone on the internet to control physical 

objects that you are monitoring. Typical IoT solutions revolve around ensuring the proper I.P addresses are accessing the IoT hub and sensors which this project will use, but 

an extra layer of security is given through the use of the Solana blockchain's data encryption abilities. This addition would a potential hacker would not only need to access the 

IoT sensor's network, but they would also need secret keys which are only kept by the intended sender and receiver.

## How this works in practice

For this project we will be using the following hardware:

- 1 x **Rasberry Pi Model 3B** (Or wifi capable PCB with SD car memory and at least these output pins):
  - **11** x **GPIO** 
  - **2** x **5V**
  - **2** x **3V** 
  - **3** X **Ground**
  - 
