//Take Faculty Data upfdation
let DataFaculty = localStorage.getItem('FacultyLogin');
let Conv = JSON.parse(DataFaculty);
// console.log(Conv);

document.getElementById('UpdateFacultyName').value = Conv.Name;
document.getElementById('FacultyUpdateEmail').value = Conv.Email;
document.getElementById('FacultyUpdateNumber').value = Conv.Phone;
document.getElementById('FacultyUpdatePassword').value = Conv.Password;
document.getElementById('FacultyUpdateCPassword').value = Conv.Password;
document.getElementById('HiddenID').innerHTML = Conv.FacultyID;
// document.getElementById('FacultyImage').src = Conv.Image;
function UpdatefacultyAccount()
{
    let FacName =  document.getElementById('UpdateFacultyName').value;  
    let FacEmail =  document.getElementById('FacultyUpdateEmail').value;  
    let FacPhone =  document.getElementById('FacultyUpdateNumber').value;  
    let FacPass =  document.getElementById('FacultyUpdatePassword').value;  
    let FacCPass =  document.getElementById('FacultyUpdateCPassword').value; 
    let FacID = document.getElementById('HiddenID').innerHTML;

    if(FacCPass == FacPass)
    {
        let FacData = localStorage.getItem('FacultyData');
        let FacParse = JSON.parse(FacData);
        
        for(let i in FacParse)
        {
            if(FacID == FacParse[i].FacultyID)
            {
               FacParse[i].Name = FacName;
               FacParse[i].Email = FacEmail;
               FacParse[i].Phone = FacPhone;
               FacParse[i].Password = FacPass;
            }
        }
        let FacStr = JSON.stringify(FacParse);
        localStorage.setItem('FacultyData',FacStr);
        alert("Profile Updated !!!");
        localStorage.removeItem('FacultyLogin')
        window.location.href="auth-login-basic.html";

    }

    
}