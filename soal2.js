function jumlahKata(input) {
    //Membuat variabel word untuk memecah kalimat menjadi kata
    let word = input.split(" ");

    //Membuat variabel count untuk menghitung kata tanpa special character
    let count = word.length;

    //Melakukan perulangan untuk menghitung kata tanpa special character
    let specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/;
    for(let i=0; i<word.length - 1; i++){
      if(specialChar.test(word[i])){
        count -= 1
      }
    }
    console.log(count);
  }
  
  jumlahKata("Saat meng*ecat tembok, Agung dib_antu oleh Raihan.")
  jumlahKata("Berapa u(mur minimal[ untuk !mengurus ktp?")
  jumlahKata("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.")