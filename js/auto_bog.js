$(function(){
  var participant = [
    { value: 'Umang Mittal | umang.mittal_bba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/1.pdf" target="_blank" download="1.pdf">Download</a>'},
    { value: 'Kartikey Rathore | kartikey.rathore_bcom16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/2.pdf" target="_blank" download="2.pdf">Download</a>'},
    { value: 'Abhishek Sharma | tannusharma199818koshi@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/3.pdf" target="_blank" download="3.pdf">Download</a>'},
    { value: 'Gaurav Srivastava | gaurav.srivastav_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/4.pdf" target="_blank" download="4.pdf">Download</a>'},
    { value: 'Alfiza | alfiza.gla_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/5.pdf" target="_blank" download="5.pdf">Download</a>'},
    { value: 'Afizah | afizah.gla_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/6.pdf" target="_blank" download="6.pdf">Download</a>'},
    { value: 'Devansh Agrawal | devanshagrawal099@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/7.pdf" target="_blank" download="7.pdf">Download</a>'},
    { value: 'Sakshi Rathore | sakshi.rathore_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/8.pdf" target="_blank" download="8.pdf">Download</a>'},
    { value: 'Aman Mittal | ujjawalmittal32@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/9.pdf" target="_blank" download="9.pdf">Download</a>'},
    { value: 'Ayush Dubey | dubeyayush9369@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/10.pdf" target="_blank" download="10.pdf">Download</a>'},
    { value: 'Shubham Garg | shubham14.sg@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/11.pdf" target="_blank" download="11.pdf">Download</a>'},
    { value: 'Arpit Goyal | goyalarpit22july@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/12.pdf" target="_blank" download="12.pdf">Download</a>'},
    { value: 'Somya Bhardwaj | somya.bhardwaj1999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/13.pdf" target="_blank" download="13.pdf">Download</a>'},
    { value: 'Divya | sbrish143div@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/14.pdf" target="_blank" download="14.pdf">Download</a>'},
    { value: 'Meenal Singhal | skyfairymeenalsinghal@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/15.pdf" target="_blank" download="15.pdf">Download</a>'},
    { value: 'Prakhar Mittal | prakharmittal0571@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/16.pdf" target="_blank" download="16.pdf">Download</a>'},
    { value: 'Venkatesh Gupta | venku1995gupta@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/17.pdf" target="_blank" download="17.pdf">Download</a>'},
    { value: 'Vivek Modanwal | vivekmodanwal2@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/18.pdf" target="_blank" download="18.pdf">Download</a>'},
    { value: 'Shubham Shrivastava | shubhamshrivastava181@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/19.pdf" target="_blank" download="19.pdf">Download</a>'},
    { value: 'Karan Maheshwari | karanmaheshwari278@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/20.pdf" target="_blank" download="20.pdf">Download</a>'},
    { value: 'Shashank Shekhar Singh | shashank.singh_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/21.pdf" target="_blank" download="21.pdf">Download</a>'},
    { value: 'Nishtha Gupta | gnishtha1714@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/22.pdf" target="_blank" download="22.pdf">Download</a>'},
    { value: 'Prince Chaturvedi | princechaturvedi50@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/23.pdf" target="_blank" download="23.pdf">Download</a>'},
    { value: 'Abhishek Bharadwaj | abhishekbhardwaj521@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/24.pdf" target="_blank" download="24.pdf">Download</a>'},
    { value: 'Faiz Ghani | faiz.ghani_bsc16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/25.pdf" target="_blank" download="25.pdf">Download</a>'},
    { value: 'Shiva Sharma | shiva.sharma_ee16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/26.pdf" target="_blank" download="26.pdf">Download</a>'},
    { value: 'Vishesh Agarwal | agarwalvishesh2000@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/27.pdf" target="_blank" download="27.pdf">Download</a>'},
    { value: 'Mohit Sharma | mohit.sharma_bba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/28.pdf" target="_blank" download="28.pdf">Download</a>'},
    { value: 'Arunabh Raghuvanshi | arunabh.raghuvanshi_eed17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/29.pdf" target="_blank" download="29.pdf">Download</a>'},
    { value: 'Anubhav Srivastava | anubhav.srivastava_ced17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/30.pdf" target="_blank" download="30.pdf">Download</a>'},
    { value: 'Muzahid Islam | muzahidislam300@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/31.pdf" target="_blank" download="31.pdf">Download</a>'},
    { value: 'Nishparsh Singhal | nishparsh.singhal_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/32.pdf" target="_blank" download="32.pdf">Download</a>'},
    { value: 'Sudhish Goswami | suddirock2@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/33.pdf" target="_blank" download="33.pdf">Download</a>'},
    { value: 'Abhishek Goyal | goyal1996abhi@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/34.pdf" target="_blank" download="34.pdf">Download</a>'},
    { value: 'Shubham Sharma | ss791313@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/35.pdf" target="_blank" download="35.pdf">Download</a>'},
    { value: 'Kartikey Singh | kartikey.singh_bba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/36.pdf" target="_blank" download="36.pdf">Download</a>'},
    { value: 'Ishan Rathi | Ishurathi19@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/37.pdf" target="_blank" download="37.pdf">Download</a>'},
    { value: 'Nitin Shrivastav | srivastavanitin039@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/38.pdf" target="_blank" download="38.pdf">Download</a>'},
    { value: 'Shashank Kumar | shashank.kumar_cs17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/39.pdf" target="_blank" download="39.pdf">Download</a>'},
    { value: 'Sfurti Mishra | sfurtimishra1999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/40.pdf" target="_blank" download="40.pdf">Download</a>'},
    { value: 'Ishita Gupta | ishita.gupta_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/41.pdf" target="_blank" download="41.pdf">Download</a>'},
    { value: 'Kajal Kaushik | kajal.kaushik_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/42.pdf" target="_blank" download="42.pdf">Download</a>'},
    { value: 'Harshit Gupta | harshit.gupta_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/43.pdf" target="_blank" download="43.pdf">Download</a>'},
    { value: 'Harsh Matlani | harsh.matlani_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/44.pdf" target="_blank" download="44.pdf">Download</a>'},
    { value: 'Jay Otwani | jay.otwani_bbafb17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/45.pdf" target="_blank" download="45.pdf">Download</a>'},
    { value: 'Megha Varshney | devanshagrawal099@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/46.pdf" target="_blank" download="46.pdf">Download</a>'},
    { value: 'Pragyan Agrawal | pragyan9073@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/47.pdf" target="_blank" download="47.pdf">Download</a>'},
    { value: 'Yash Mittal | yashmittalj7@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/48.pdf" target="_blank" download="48.pdf">Download</a>'},
    { value: 'Rohit Khandelwal | mukulkhandelwal100@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/49.pdf" target="_blank" download="49.pdf">Download</a>'},
    { value: 'Pratham Agrawal | 2000pagrawal@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/50.pdf" target="_blank" download="50.pdf">Download</a>'},
    { value: 'Anuj Pathak | anuj.pathak_bca16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/51.pdf" target="_blank" download="51.pdf">Download</a>'},
    { value: 'Anshul Kulshrestha | anshul.kulshrestha_bca16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/52.pdf" target="_blank" download="52.pdf">Download</a>'},
    { value: 'Aman Verma | aman.verma_bca16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/53.pdf" target="_blank" download="53.pdf">Download</a>'},
    { value: 'Gaurav Sharma | gauravmadhav9@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/54.pdf" target="_blank" download="54.pdf">Download</a>'},
    { value: 'Abhishek Singh Tomar | rajattomar97@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/55.pdf" target="_blank" download="55.pdf">Download</a>'},
    { value: 'Umang Mittal | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/56.pdf" target="_blank" download="56.pdf">Download</a>'},
    { value: 'Nancy Gupta | nancy.gupta@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/1_1.pdf" target="_blank" download="1_1.pdf">Download</a>'},
    { value: 'Shahaban Ali | shahaban.ali_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/2_1.pdf" target="_blank" download="2_1.pdf">Download</a>'},
    { value: 'Chandra Prakash | chandra.prakash_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/3_1.pdf" target="_blank" download="3_1.pdf">Download</a>'},
    { value: 'Shail Gupta | shailgupta250995@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/4_1.pdf" target="_blank" download="4_1.pdf">Download</a>'},
    { value: 'Gauri Goswami | gaurigoswami15@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/5_1.pdf" target="_blank" download="5_1.pdf">Download</a>'},
    { value: 'Nitanshi Mittal | nitanshimittal28@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/6_1.pdf" target="_blank" download="6_1.pdf">Download</a>'},
    { value: 'Parag Goyal | paraggoyal40@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/7_1.pdf" target="_blank" download="7_1.pdf">Download</a>'},
    { value: 'Shruti Maheshwari | mshruti220@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/8_1.pdf" target="_blank" download="8_1.pdf">Download</a>'},
    { value: 'Shiva Tandon | shivatandon67@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/9_1.pdf" target="_blank" download="9_1.pdf">Download</a>'},
    { value: 'Anjali Soni | lavi.anjalisoni@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/10_1.pdf" target="_blank" download="10_1.pdf">Download</a>'},
    { value: 'Chintan Juneja | chintanjuneja368@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/1_2.pdf" target="_blank" download="1_2.pdf">Download</a>'},
    { value: 'Shobhit Katrauliya | shobhit.playstore@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/2_2.pdf" target="_blank" download="2_2.pdf">Download</a>'},
    { value: 'Shruti Darbari | shruti.darbari1510@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/3_2.pdf" target="_blank" download="3_2.pdf">Download</a>'},
    { value: 'Divya Goel | divyagoel0498@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/4_2.pdf" target="_blank" download="4_2.pdf">Download</a>'},
    { value: 'Rishabh Kapoor | kapoorrishabh7991@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/5_2.pdf" target="_blank" download="5_2.pdf">Download</a>'},
    { value: 'Harshit Maheshwari | harshit.karan.RM@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/6_2.pdf" target="_blank" download="6_2.pdf">Download</a>'},
    { value: 'Shubham Yadav | syadavyadav48@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/1_3.pdf" target="_blank" download="1_3.pdf">Download</a>'},
    { value: 'B.Sai Chandra Pawan | bsaipawan_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/2_3.pdf" target="_blank" download="2_3.pdf">Download</a>'},
    { value: 'Rajiv Kumar Yadav | rajiv.yadav_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/3_3.pdf" target="_blank" download="3_3.pdf">Download</a>'},
    { value: 'Shivaansh Agarwal | shivaansh.agarwal_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/4_3.pdf" target="_blank" download="4_3.pdf">Download</a>'},
    { value: 'Himanshu Goyal | himanshu.goyal_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/5_3.pdf" target="_blank" download="5_3.pdf">Download</a>'},
    { value: 'Abhijeet Katiyar | abhijeet.katiyar_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/6_3.pdf" target="_blank" download="6_3.pdf">Download</a>'},
    { value: 'Nitanshi Mittal | nianshimittal28@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/7_3.pdf" target="_blank" download="7_3.pdf">Download</a>'},
    { value: 'Harsh Gupta | harsh.gupta_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/8_3.pdf" target="_blank" download="8_3.pdf">Download</a>'},
    { value: 'Shivam Srivastava | shivam.srivastava_bba16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/1_4.pdf" target="_blank" download="1_4.pdf">Download</a>'},
    { value: 'Atul Kumar Maurya | atul.maurya_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/2_4.pdf" target="_blank" download="2_4.pdf">Download</a>'},
    { value: 'Chaudhary Jagrit Varshney | jagrit.varshney_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/3_4.pdf" target="_blank" download="3_4.pdf">Download</a>'},
    { value: 'Subrat Mishra | subrat.mishra_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/1_5.pdf" target="_blank" download="1_5.pdf">Download</a>'},
    { value: 'Kumar Ujjwal Pandey | ujjwal.pandey_cs16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/2_5.pdf" target="_blank" download="2_5.pdf">Download</a>'},
    { value: 'Akshant Chooramani | akshantchooramani4@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/3_5.pdf" target="_blank" download="3_5.pdf">Download</a>'},
    { value: 'Aman Gupta | amangupta@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/e-conclave/bog/4_5.pdf" target="_blank" download="4_5.pdf">Download</a>'},
    ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name | e-mail :</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});