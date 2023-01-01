//Register Faculty -->
let FacultyData = [];
let RegisterFaculty = () => {
    let RegisterFacultyName = document.getElementById('RFacultyName').value;
    let RegisterFacultyEmail = document.getElementById('RFacultyEmail').value;
    let RegisterFacultyPass = document.getElementById('RFacultyPass').value;
    let RegisterFacultyCPass = document.getElementById('RFacultyCPass').value;
    let RegisterFacultyPhone = document.getElementById('RfacultyPhone').value;

    if (RegisterFacultyCPass == RegisterFacultyPass) {
        let FacultyOBJ = {
            Name: RegisterFacultyName,
            Email: RegisterFacultyEmail,
            Password: RegisterFacultyPass,
            Phone: RegisterFacultyPhone,
            FacultyID: Math.floor(Math.random() * 10000),
        }

        if (localStorage.getItem('FacultyData') === null || localStorage.getItem('Faculty') === undefined) {
            FacultyData.push(FacultyOBJ);
            let Set = JSON.stringify(FacultyData);
            localStorage.setItem('FacultyData', Set);
        }
        else {
            let FDTaker = localStorage.getItem('FacultyData');
            let FDParse = JSON.parse(FDTaker);
            FacultyData = FDParse;
            FacultyData.push(FacultyOBJ);
            let Set = JSON.stringify(FacultyData);
            localStorage.setItem('FacultyData', Set);
        }

        document.getElementById('RFacultyName').value = null;
        document.getElementById('RFacultyEmail').value = null;
        document.getElementById('RFacultyPass').value = null;
        document.getElementById('RFacultyCPass').value = null;
        window.location.href = "auth-login-basic.html";
    }
    else {
        alert("Passwored Was Not atched");
    }
}
//Register Faculty -->

//Login Faculty
let LoginFaculty = () => {
    let FacultyEmail = document.getElementById('FacultyEmail').value;
    let FacultyPassword = document.getElementById('FacultyPassword').value;

    let RegisterFacultyData = localStorage.getItem('FacultyData');
    let Parse = JSON.parse(RegisterFacultyData);

    for (let i in Parse) {
        if (Parse[i].Email == FacultyEmail && Parse[i].Password == FacultyPassword) {
            let Giver = JSON.stringify(Parse[i]);
            localStorage.setItem('FacultyLogin', Giver);
            window.location.href = "index.html";
        }

    }

}
//Login Faculty

//Index Data Viewer 
function ViewData() {
    let StudentData = localStorage.getItem('StudentData');
    let parser = JSON.parse(StudentData);
    let Table = "";
    for (let i in parser)
    {
    Table += `<tr>
                        <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>${parser[i].Grid}</strong></td>
                        <td>${parser[i].Name}</td>
                        <td>${parser[i].Phone}</td>
                        <td><span class="badge bg-label-primary me-1">${parser[i].Email}</span></td>
                        <td><span class="badge bg-label-danger me-1">${parser[i].Password}</span></td>
                        <td>
                              <a class="dropdown-item btn-btn-danger" onclick="EditData(${parser[i].Grid})"
                                ><i class="bx bx-edit-alt me-2"></i> Edit</a
                              >
                        </td>
                        <td>
                        <a class="dropdown-item" onclick="DeleteData(${parser[i].Grid})"
                                ><i class="bx bx-trash me-2"></i> Delete</a
                              >
                        </td>
                            </div>
                          </div>
                </tr>`;
                    }
                    document.getElementById('TableData').innerHTML = Table;
}
ViewData();
//Edit Student Data
function EditData(Grid) {
    let SData = localStorage.getItem('StudentData');
    let parser = JSON.parse(SData);


    for (let i in parser) {
        if (Grid == parser[i].Grid) {
            let SingleStudent = JSON.stringify(parser[i]);
            localStorage.setItem('SingleData', SingleStudent);
        }
    }
    window.location.href = "EditData.html";

}
// Delete Student Data
function DeleteData(Grid) {
    let SDdata = localStorage.getItem("StudentData");
    let uservalue = JSON.parse(SDdata);

    for (let i in uservalue) {
        if (uservalue[i].Grid == Grid) {
            console.log(uservalue[i].Grid)
            uservalue.splice(i, 1);
        }
    }
    let st1 = JSON.stringify(uservalue);
    localStorage.setItem("StudentData", st1);
    ViewData();
}
//Index Data Viewer 

//StudentRegister JS:
function RegisterStudent() {
    let Student = [];
    let Sname = document.getElementById('basic-default-fullname').value;
    let Sphone = document.getElementById('basic-default-mobile').value;
    let Semail = document.getElementById('basic-default-email').value;
    let Spass = document.getElementById('basic-default-password').value;
    let Scpass = document.getElementById('basic-default-cpassword').value;
    let Scource = document.getElementById('basic-default-cource-name').value;
    let gender = document.forms['FormData']['Gender'].value;
    // let Cource = document.forms['FormData']['courceData'].value;

    //For TechSkills
    let c = document.getElementsByName('skills');
    let CheckedValue = [];
    for(i=0;i < c.length;i++)
    {
         if(c[i].checked)
         {
             CheckedValue.push(c[i].value)
         }
    }

    //For DesignSoft 
    let d = document.getElementsByName('design');
    let DesignSoft = [];
    for(i=0;i < d.length;i++)
    {
         if(d[i].checked)
         {
             DesignSoft.push(d[i].value)
         }
    }

    if (Scpass == Spass){
        let StudentObj = {
            Name: Sname,
            Email: Semail,
            Phone: Sphone,
            Image : "DefStudent.jpg",
            Password: Spass,
            Gender: gender,
            Grid: Math.floor(Math.random() * 1000),
            courceName: Scource,
            TechSkill:CheckedValue,
            Design:DesignSoft,
        }

        if (localStorage.getItem('StudentData') === null || localStorage.getItem('StudentData') === undefined) {
            Student.push(StudentObj);
            let SData = JSON.stringify(Student);
            localStorage.setItem('StudentData', SData)
        }
        else {
            let Taker = localStorage.getItem('StudentData');
            let parser = JSON.parse(Taker);
            Student = parser;
            Student.push(StudentObj);
            let SData = JSON.stringify(Student);
            localStorage.setItem('StudentData', SData);
        }
        window.location.href = "index.html";
        console.log(StudentObj)
    }
    else {
        alert("PasswordNot Matched")
    }

}

//StudentRegister JS:

let a = localStorage.getItem('FacultyLogin');
let Data = JSON.parse(a);
document.getElementById('FacultyName').innerHTML = Data.Name;

//Login Student
function LoginStudent() {

    let UserGrid = document.getElementById('StudentId').value;
    let userPass = document.getElementById('StudentPassword').value;

    let studentData = localStorage.getItem('StudentData');
    let parser = JSON.parse(studentData);

    for (let i in parser) {
        if (parser[i].Grid == UserGrid && parser[i].Password == userPass) {
            let Data = JSON.stringify(parser[i]);
            localStorage.setItem('StudentLoginNow', Data);
        }
    }

    window.location.href = "studentIndex.html"
}
//Login Student



