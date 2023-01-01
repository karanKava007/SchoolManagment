let StData = localStorage.getItem('StudentLoginNow');
let p = JSON.parse(StData);

let img = document.getElementById   ('StudentAvtar');
img.setAttribute('src',p.Image);

document.getElementById('UpdateStudentName').value = p.Name;
document.getElementById('UpdateStudentEmail').value = p.Email;
document.getElementById('UpdateStudentNumber').value = p.Phone;
document.getElementById('UpdateStudentPass').value = p.Password;
document.getElementById('UpdateStudentCPass').value = p.Password;
document.getElementById('HiddenGRID').innerHTML = p.Grid;

function UpdateStudent()
{
    let Name = document.getElementById('UpdateStudentName').value;
    let Email = document.getElementById('UpdateStudentEmail').value;
    let Phone = document.getElementById('UpdateStudentNumber').value;
    let Pass = document.getElementById('UpdateStudentPass').value;
    let CPass = document.getElementById('UpdateStudentCPass').value;
    let GRID = document.getElementById('HiddenGRID').innerHTML;

    if(Pass == CPass)
    {
       let StUpdate =  localStorage.getItem('StudentData');
       let str = JSON.parse(StUpdate);

       for(let i in str)
       {
        if(str[i].Grid == GRID)
        {
            str[i].Name = Name;
            str[i].Email = Email;
            str[i].Phone = Phone;
            str[i].Password = Pass;
        }
       }

       let DataTrans = JSON.stringify(str);
       localStorage.setItem('StudentData',DataTrans);
       window.location.href = "studentLogin.html";
    }
    
}
