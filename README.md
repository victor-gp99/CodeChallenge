# Code Challenge

Seventh project with LaunchX

Se utilizó las dependencias Express para realizar una API conectada al puerto 3000, donde se hicieron 3 end points alojadas en el archivo server.js y replicadas hacia la carpeta lib, donde se encuentra la logica del programa:

- Un endpoint para consultar todos los estudiantes con todos sus campos.
- Un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
- Un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

Tambien se utilizo la dependencia de JEST para las peuebas unitarias de cada clase, estasse alojan en la carpeta test (replica de la carpeta lib).
Por otra parte para reforzar las pruebas se agrego las pruebas automatizadas atravéz de GitHub Actions lojadas en la carpeta .github/worckflows/test.yml. 

![alt text](https://user-images.githubusercontent.com/17634377/165870375-fe5a730a-eada-4abe-ac9c-42334e003b18.png)
Referencia: https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/blob/main/semanas/semana_4/5_code_challenge.md