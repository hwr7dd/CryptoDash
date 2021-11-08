<p align="center">
<img src="https://github.com/hwr7dd/cryptdash/blob/main/logosmall.png") 
 </p>
 
**CryptoDash** is an IoT (Internet of Things) dashboarding software based around:

- **React Native** for the **front end**

- **NodeJs** for the **backend/server**

- **MongoDb** for **IoT sensor data**

- **PostgreSQL** for **relational data**
 
- **Solana** for **encryption**


**⚛️React Native** is used due to it's fast development time and ability to scale to a variety of different devices easily

**🖥️NodeJs** is used because the rest of this project is coded using **Javascript**

**🍃MongoDB** is used because we are streaming large amounts of sensor data  

**🐘 PostgreSQL** is used because most of the relational data can be queried better using a relational database 
 
**ⓢ Solana** is used to encrypt messaging between your device and NodeJs



The concept behind this project is that there should be extra attention paid to security when there is a potential for someone on the internet to control physical 
objects that you are monitoring. Typically IoT solutions ensure the proper I.P addresses are accessing the IoT hub and sensors as their primary layer of data security. This project will use that layer of security, but will also add
one more through the use of the Solana blockchain's data encryption abilities. This addition would mean a potential hacker would not only need to access the IoT sensors network, but would also need secret keys which are only kept by the sender and receiver.
 
<p align="center">
<img src="https://github.com/hwr7dd/cryptdash/blob/main/diagramsmall.png") 
</p>
 
## Hardware
 
*This project is focused around software and not hardware. You may need more components to make a usable replication of this project. 
 
 #### For this project I use the following hardware:

- **1** x Rasberry Pi Model 3B (Or wifi capable PCB with SD card memory** * and **at least one:** GPIO, Ground, 3V)

- **1** x DHT11 Temp/Humidity Sensor (I used DHT11 because they were cheaper to replace)
 
 

 ### Icons/Graphic Attribution:
- <a href="https://iconscout.com/icons/thermometer" target="_blank">Thermometer Icon</a> by <a href="https://iconscout.com/contributors/eva-icons">Akveo</a> on <a href="https://iconscout.com">Iconscout</a>
- <a href="https://iconscout.com/icons/sun" target="_blank">Sun Icon</a> by <a href="https://iconscout.com/contributors/phosphoricons">Phosphor Icons</a> on <a href="https://iconscout.com">Iconscout</a>
- <a href="https://iconscout.com/icons/wind" target="_blank">Wind Icon</a> by <a href="https://iconscout.com/contributors/feathericons" target="_blank">Feather Icons</a>
- <a href="https://iconscout.com/icons/lock" target="_blank">Lock Icon</a> by <a href="https://iconscout.com/contributors/unicons" target="_blank">Unicons Font</a>
- <a href="https://iconscout.com/icons/user" target="_blank">User Icon</a> by <a href="https://iconscout.com/contributors/iconscout">Iconscout Store</a> on <a href="https://iconscout.com">Iconscout</a>
- <a href="https://iconscout.com/icons/key" target="_blank">Key Icon</a> by <a href="https://iconscout.com/contributors/unicons">Unicons Font</a> on <a href="https://iconscout.com">Iconscout</a>
- <a href="https://iconscout.com/icons/file" target="_blank">File Icon</a> by <a href="https://iconscout.com/contributors/font-awesome">Font Awesome</a> on <a href="https://iconscout.com">Iconscout</a> 
