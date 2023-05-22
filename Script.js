function submit_by_tag()
{
    const personal = [];

    let obj = {
        name: '',
        school: '',
        email: '',
        password:'',
        phone:'',
        address: '',
        city:'',
        provinces:'',
        zip:''

    };

    let name =  document.getElementById('studentName').value;
    let school = document.getElementById('school').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('Password').value;
    let phone = document.getElementById('Phone').value;
    let address = document.getElementById('Address').value;
    let city = document.getElementById('City').value;
    let provinces = document.getElementById('inputState').value;
    let zip = document.getElementById('zip').value;

    personal.push(obj.name = name, obj.school = school,obj.email = email,obj.password = password,obj.phone = phone,obj.address = address,obj.city = city,obj.provinces = provinces,obj.zip = zip,)

    alert(personal)


    

}

