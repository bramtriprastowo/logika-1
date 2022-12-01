function kaoskaki(input){
    //Membuat variabel array1 untuk menghitung jumlah angka yang sama untuk tiap angka
    let array1 = [];

    // Variable count untuk menghitung jumlah angka yang sama
    let count = 0;

    //Mengisi array 1 dengan angka 0 untuk tiap value, sejumlah range angka maksimum
    let max = Math.max(...input);
    for(let i = 0; i <= max; i++){
      array1.push(0);
    }
    
    //Melakukan perulangan untuk menghitung jumlah angka untuk tiap angka pada array1
    for(let i = 0; i <= max; i++){
      for(let j = 0; j < input.length; j++){
      if(i === input[j]){
        array1[i] += 1;
      }
      }
    }
    
    //Menghitung jumlah angka yang lebih dari 2 (kaos kaki), dengan membagi dua bilangan yang jumlahnya lebih dari 2, kemudian dibulatkan ke bawah
    for(let i = 0; i < array1.length; i++){
      if(array1[i] >= 2){
        count += Math.floor(array1[i] / 2)
      }
    }

    //Menampilkan jumlah pasang kaos kaki
    console.log(count);
  }
  
  kaoskaki([10, 20, 20, 10, 10, 30, 50, 10, 20]);
  kaoskaki([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]);
  kaoskaki([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);