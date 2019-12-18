function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}


// get the list of ports:
function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    print(i + " " + portList[i]);
  }
}


function serialEvent() {
  // this is called when data is recieved, data will then live in fromSerial  
  var stringFromSerial = serial.readLine();
   if (stringFromSerial.length > 0) {             // is the something there ?
    var trimmedString = trim(stringFromSerial);  // get rid of all white space
    var myArray = split(trimmedString, ",")      // splits the string into an array on commas
    fromSerial = Number(myArray[0]);             // get the first item in the array and turn into integer
    fromSerial2 = Number(myArray[1]);
  
  // console.log(fromSerial,fromSerial2)
  // if(fromSerial2 >= 50 && fromSerial2 <= 150 && pageStatus != 3){
  // //   // counting ++;
  // //   // if(counting >= 10){
  //       pageStatus = 2;  
  // //       console.log("change screen")
  // //       // counting = 0；
  //   }
 
  // }else{
  //   counting = 0;
  // }
  // console.log(counting)
}
}




