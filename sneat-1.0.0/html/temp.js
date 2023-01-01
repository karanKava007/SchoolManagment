
function StudentCheckedSkill()
{
    let Single = localStorage.getItem('SingleData');
    let parser = JSON.parse(Single);

document.getElementById('UpdateName').value = parser.Name;
document.getElementById('UpdateEmail').value = parser.Email;
document.getElementById('UpdateMobile').value = parser.Phone;
document.getElementById('UpdatePassword').value = parser.Password;
document.getElementById('UpdateCpassword').value = parser.Password;
document.getElementById('CourceName').value = parser.courceName;
document.forms['FormData']['Gender'].value = parser.Gender;
document.getElementById('HiddenUpdater').innerHTML = parser.Grid;
//Error
let c = document.getElementsByName('skills');
let CheckedValue = [];
for (i = 0; i < c.length; i++) {
    // console.log(parser.TechSkill[i])
    // console.log(c[i].value)
    if( c[i].value =  parser.TechSkill[i])
    {
        c[i].Checked =  parser.TechSkill[i]
    }
}
}
StudentCheckedSkill()
function UpdateStudentInfo() {
    //UpdateStudent dataBase
   let StudentName = document.getElementById('UpdateName').value;
   let StudentEmail = document.getElementById('UpdateEmail').value;
   let StudentPhone = document.getElementById('UpdateMobile').value;
   let StudentPass = document.getElementById('UpdatePassword').value;
   let StudentCPass = document.getElementById('UpdateCpassword').value ;
   let StudentCourceName = document.getElementById('CourceName').value;
   let GRIDup = document.getElementById('HiddenUpdater').innerHTML;

   let StudentDataUpdate = localStorage.getItem('StudentData');
   let StudentParser = JSON.parse(StudentDataUpdate);
   
   if(StudentPass == StudentCPass)
   {
        for(let item in StudentParser)
        {
            if(StudentParser[item].Grid == GRIDup)
            {   
                StudentParser[item].Name = StudentName;
                StudentParser[item].Email = StudentEmail;
                StudentParser[item].Phone = StudentPhone;
                StudentParser[item].Password = StudentPass;
                StudentParser[item].courceName = StudentCourceName;
            }
        }
        let DataParse = JSON.stringify(StudentParser);
        localStorage.setItem('StudentData',DataParse);
        window.location.href="index.html";
        localStorage.removeItem('SingleData');

   }
}

//Forgot Password System :
function GetOtp()
{
   let EmailData = document.getElementById('ForgotEmail').value;
   let ForgotPass = {
    Email : EmailData,
    OTP : Math.floor(Math.random()*7654543)
   }

   let ForgotPassProcess = JSON.stringify(ForgotPass);
   localStorage.setItem('ForgotPassProc',ForgotPassProcess);
   window.location.href="OTP.html";
   
}
function SubmitOTP()
{
    let OTP = document.getElementById('OTP_Value').value;
    let FP = localStorage.getItem('ForgotPassProc');
    let con = JSON.parse(FP);

    if(OTP == con.OTP)
    {
       window.location.href="NewPass.html";
    }
    else
    {
        alert('404')
    }
}
function IndexTrans()
{
    let NewPass = document.getElementById('UpdateNewPass').value;
    let NewCPass = document.getElementById('UpdateNewCPass').value;

   if(NewCPass == NewPass)
   {
        let FcltyLog = localStorage.getItem('FacultyData');
        let Parserr =JSON.parse(FcltyLog);
        let ForgotProc = localStorage.getItem('ForgotPassProc');
        let p = JSON.parse(ForgotProc);

       for(let i in Parserr)
       {
        if(Parserr[i].Email == p.Email)
        {
            Parserr[i].Password = NewPass;
            
        }
       }
       let str = JSON.stringify(Parserr);
       localStorage.setItem('FacultyData',str);
        window.location.href="index.html";
        localStorage.removeItem('ForgotPassProc');
   }
   else
   {
    alert('404')
   }
}

