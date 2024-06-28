FP ini adalah aplikasi CRUD (Create, Read, Update, Delete) sederhana yang dibangun menggunakan Node.js, Express, dan MongoDB. Aplikasi ini menyediakan interface pengelola item dengan operasi dasar CRUD.

## Alat yang digunakan

### Alat Pembuatan kerangka website
- **Node.js**: Waktu proses JavaScript untuk membangun backend.
- **Ekspres**: Kerangka web untuk Node.js.
- **Mongoose**: Alat pemodelan objek MongoDB.
- **dotenv**: Modul untuk membuat environment variable dari file `.env`.

### Alat Pengujian website
- **Mocha**: Testing JavaScript untuk program Node.js.

### File Dokumentasi Final Project
- Berikut file dokumentasi kami dalam pembuatan project tersebut https://docs.google.com/document/d/1d3LCI84Qzu9nF25DUr4n5HLtOgOi0FnEpbNlgFK0QvE/edit?usp=sharing

### Requirements
Untuk menjalankan CI/CD pada project ini baiknya buatlah akun dan download beberapa tools dibawah ini.

- **Docker Hub (CD)**
  Link: https://hub.docker.com/

- **Amazon Account (Hosting Tools)**
  Link: https://hub.docker.com/

- **SOOS (DAST)**
  Link: https://hub.docker.com/

- **Docker (CD)**
  Link Download: https://docs.docker.com/desktop/install/windows-install/
  
- **Terraform (Arsitektur Server)**
  Link Download: https://developer.hashicorp.com/terraform/install

  ### Instalasi
1. Lakukan Clone pada repository
    ```sh
    git clone https://github.com/sonus69/FP-PSO-Kelompok-8.git
    ```
2. konfigurasi isi docker file tersebut dengan versi node serta instalasi lainnya yang diperlukan.
3. Buat akun pada docker hub, aws serta tools soos.
4. Buat secrets key pada akun aws yang telah dibuat, docker hub repository dan tools soos lalu masukkan ke dalam github.
5. Sesuaikan isi dari file terraform dengan instance yang anda buat, mulai dari region hingga port yang anda butuhkan.
6. Sesuaikan script pada CI/CD.yml dengan konfigurasi yang anda punya, mulai dari secret key yang dibuat (amazon, docker  hingga docker hub repository yang ingin dipakai.
7. Buatlah repository baru di github lalu lakukan push semua file ke repository yang anda buat dan perhatikan actions pada repository anda.
8. Perhatikan output dari file ci/cd.yml pada bagian deploy dalam actions di repository anda, dimana terdapat instance ip yang nantinya berhasil dibuat.
9. Masukkan instance ip tersebut pada tab internet anda. Jika dapat diakses maka anda berhasil menerapkan devops dalam project tersebut.
