function submit_by_tag()
{
    const personal = [
        {
            firstname: '',
            school: '',
            email: '',
            password:'',
            phone:'',
            address: '',
            city:'',
            provinces:'',
            zip:''
    
        }
    ];

    // personal.push({firstname: 'cy'})

    // alert(personal[1].firstname)

  

    let name =  document.getElementById('studentName').value;
    let school = document.getElementById('school').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('Password').value;
    let phone = document.getElementById('Phone').value;
    let address = document.getElementById('Address').value;
    let city = document.getElementById('City').value;
    let provinces = document.getElementById('inputState').value;
    let zip = document.getElementById('zip').value;

    personal.push({firstname : name, school :school, email : email,password : password, phone : phone,address :address,city : city,provinces: provinces,zip: zip})

    alert(personal[1].firstname)

    
    localStorage.setItem('personal',JSON.stringify(personal[1]));

    // // // Can use it for login 
    let getPersonal = JSON.parse(localStorage.getItem('personal'));
    
    alert(getPersonal)
    console.log(email)
    // // document.getElementById('studentName').value;

    


    

}