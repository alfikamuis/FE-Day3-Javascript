# FE-Day3-Javascript

### Task 1
non practical answer
<details><summary><b>Answers</b></summary>

1. Take index 2 from array:

    ```diff
    + console.log("array ="+ lengkap_arr[2]);
    ```

2. Show from if statement:

    ```diff
    + terdaftar = true;
       if (terdaftar === true){
        console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
       }
    ```
 
 3. Call perkenalan func :

    ```diff
    + perkenalan();
    ```

4. Edit the code so the outputs as an image below:<br>
![image](https://user-images.githubusercontent.com/38674801/191489910-5ade9a56-858d-4c6b-924e-c86dedeefb7b.png)

    ```sh
     check the code on Task1-2.js
    ```

</details>

### Task 2
non practical answer
<details><summary><b>Answers</b></summary>

1. Why line 21,22,23 on image bellow not shown:
![image](https://user-images.githubusercontent.com/38674801/191491688-6e9c3afc-66b9-4f4a-aec7-2e699caa8384.png)

    ```diff
      let terdaftar = false;
    - because, the value of terdaftar is false. And if statement needed true value to execute the console log
    ```

2. Why line 26 error:
![image](https://user-images.githubusercontent.com/38674801/191492477-62f76e24-f80e-4d74-956f-12f3b5c148de.png)

    ```sh
    because const is a block-scoped, value in variable nama cant changes over reassignment
    ```
 
 3. Comment line 26 and still getting error on line 28, why? :
 ![image](https://user-images.githubusercontent.com/38674801/191493807-ced0ad9f-391b-45bc-bfc8-e2323bf731b3.png)

    ```sh
    because variable asal only declared locally in perkenalan func, 
    ```

</details>

### Task 3,4,5,6 in folder repo

