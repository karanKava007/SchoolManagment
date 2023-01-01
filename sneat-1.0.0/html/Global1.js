//Student DataBase
function StudentDataBase()
{
    let DatBase = localStorage.getItem('StudentLoginNow');
    let Parse = JSON.parse(DatBase);
    let htmlMain = "";
    let html1 = "";
    let html2 = "";
    htmlMain += `
     <span class="pro">PRO</span>
     <img class="round" width="200" src="${Parse.Image}" alt="user" />
     <h3>${Parse.Name}</h3>
     <h6>${Parse.courceName}</h6>
     <p>Always Ready For Your Work<br/>Our Most Trusted And Logical Devloper</p>
     <div class="d-f">
     <div class="skills w-50">
         <h6>Email</h6>
         <h3 class="">${Parse.Email}</h3>
    </div>
    <div class="skills w-50">  
         <h6>Contact</h6>
         <h3>${Parse.Phone}</h3>
    </div>
     </div>
     <div class="d-f">
     <div class="skills w-50">
         <h6>Password</h6>
         <h3 class="">${Parse.Password}</h3>
    </div>
    <div class="skills w-50">  
         <h6>GRID</h6>
         <h3>${Parse.Grid}</h3>
    </div>
     </div>
    <div class="skills w-50">
         <h6>Gender</h6>
         <h3>${Parse.Gender}</h3>
    </div>
     <div class="skills">
         <h6>Technical - Skills</h6>
         <ul id="SkillsData">

         </ul>
     </div>
     
     <div class="skills">
         <h6>Designing - Softwear</h6>
         <ul id="DesData">

         </ul>
     </div>`
    for(let i in Parse.TechSkill)
     {
        html1+=`
            <li>${Parse.TechSkill[i]}</li>`;
     };
     for(let i in Parse.Design)
     {
        html2+=`
            <li>${Parse.Design[i]}</li>`;
     };
     
    document.getElementById('DataBase').innerHTML = htmlMain;
    document.getElementById('SkillsData').innerHTML = html1;
    document.getElementById('DesData').innerHTML = html2;
    document.getElementById('StudentName').innerHTML = Parse.Name;
}
StudentDataBase();
//Student DataBase


