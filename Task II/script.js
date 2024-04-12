// Dictionary with email as key and redirect link as value
const emailDictionary = {
    "parthjain49@gmail.com": "Certificate (1) (4)-1.pdf",
    "rohit.akshh@gmail.com": "Certificate (1) (4)-2.pdf",
    "alizaziasiddiqui@gmail.com": "Certificate (1) (4)-3.pdf",
    "areebahziasiddiqui@gmail.com": "Certificate (1) (4)-4.pdf",
    "panditpranjal52@gmail.com": "Certificate (1) (4)-5.pdf",
    "aajigyabhati@gmail.com": "Certificate (1) (4)-6.pdf",
    "jainkriti8517@gmail.com": "Certificate (1) (4)-7.pdf",
    "aksharas999@gmail.com": "Certificate (1) (4)-8.pdf",
    "anshitanagvanshi@gmail.com": "Certificate (1) (4)-9.pdf",
    "dhruvi12suvarna@gmail.com": "Certificate (1) (4)-10.pdf",
    "Biswas9999@gmail.com": "Certificate (1) (4)-11.pdf",
    "kanchangh425@gmail.com": "Certificate (1) (4)-12.pdf",
    "iamsarthakjha@gmail.com": "Certificate (1) (4)-13.pdf",
    "tanyashahi99@gmail.com": "Certificate (1) (4)-14.pdf",
    "rishabh.23095@sscbs.du.ac.in": "Certificate (1) (4)-15.pdf",
    "aayushsingh.me21@rvce.edu.in": "Certificate (1) (4)-16.pdf",
    "hridaysongara0@gmail.com": "Certificate (1) (4)-17.pdf",
    "adarshv.e08@gmail.com": "Certificate (1) (4)-18.pdf",
    // Add more email and redirect link pairs as needed
  };
  
  function checkEmail() {
    const emailInput = document.getElementById("emailInput").value.toLowerCase();
    
    // Check if email exists in dictionary
    if (emailDictionary.hasOwnProperty(emailInput)) {
      // Redirect to the corresponding link
      window.location.href = emailDictionary[emailInput];
    } else {
      alert("E-mail not found.");
    }
  }
  