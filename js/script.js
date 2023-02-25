const tBody = document.querySelector(".table tbody");
const addRow = document.querySelector(".addBtn");

let id = 0;
let forms;
let tableData = [];
let row;

addRow.onclick = () => {
  row = ++id;
  const tr = document.createElement("tr");
  forms = document.createElement("form");
  forms.setAttribute("id", `${row}`);
  forms.setAttribute("onsubmit", "saveButton(event);");
  document.body.appendChild(forms);

  // cell for name
  const td1 = document.createElement("td");
  const inp1 = document.createElement("input");
  inp1.setAttribute("type", "text");
  inp1.setAttribute("form", `${row}`);
  inp1.setAttribute("required", "");
  inp1.setAttribute("id", `st_name${row}`);
  inp1.classList.add("inpStyle");
  td1.appendChild(inp1);
  tr.appendChild(td1);

  // cell for student roll number
  const td2 = document.createElement("td");
  const inp2 = document.createElement("input");
  inp2.setAttribute("type", "number");
  inp2.setAttribute("form", `${row}`);
  inp2.setAttribute("required", "");
  inp2.setAttribute("id", `roll_num${row}`);
  inp2.classList.add("inpStyle");
  td2.appendChild(inp2);
  tr.appendChild(td2);

  // cell for subject
  const td3 = document.createElement("td");
  const inp3 = document.createElement("input");
  inp3.setAttribute("type", "text");
  inp3.setAttribute("form", `${row}`);
  inp3.setAttribute("required", "");
  inp3.setAttribute("id", `subject${row}`);
  inp3.classList.add("inpStyle");
  td3.appendChild(inp3);
  tr.appendChild(td3);

  // cell for marks
  const td4 = document.createElement("td");
  const inp4 = document.createElement("input");
  inp4.setAttribute("type", "number");
  inp4.setAttribute("form", `${row}`);
  inp4.setAttribute("required", "");
  inp4.setAttribute("id", `marks${row}`);
  inp4.classList.add("inpStyle");
  td4.appendChild(inp4);
  tr.appendChild(td4);

  // cell for email
  const td5 = document.createElement("td");
  const inp5 = document.createElement("input");
  inp5.setAttribute("type", "email");
  inp5.setAttribute("form", `${row}`);
  inp5.setAttribute("required", "");
  inp5.setAttribute("id", `mark_by${row}`);
  inp5.classList.add("inpStyle");
  td5.appendChild(inp5);
  tr.appendChild(td5);

  //cell for submit button
  const td6 = document.createElement("td");
  const inp6 = document.createElement("input");
  inp6.setAttribute("type", "submit");
  inp6.setAttribute("form", `${row}`);
  inp6.setAttribute("value", "Save");
  inp6.classList.add("btnStyle");
  inp6.style.width = "80%";
  td6.appendChild(inp6);
  tr.appendChild(td6);

  tBody.appendChild(tr);

  const td = document.createElement("td");
  const tdText = document.createTextNode(`${row}`);
  td.appendChild(tdText);
  tr.prepend(td);
};

function saveButton(event) {
  event.preventDefault();
  if (tableData[event.target.id - 1] == undefined) {
    let obj = {
      id: "",
      student_name: "",
      student_roll: "",
      subject: "",
      marks: "",
      markedBy: "",
    };

    let names = document.getElementById(`st_name${row}`);
    let r_num = document.getElementById(`roll_num${row}`);
    let subj = document.getElementById(`subject${row}`);
    let mark = document.getElementById(`marks${row}`);
    let email = document.getElementById(`mark_by${row}`);

    obj.id = event.target.id;
    obj.student_name = names.value;
    obj.student_roll = r_num.value;
    obj.subject = subj.value;
    obj.marks = mark.value;
    obj.markedBy = email.value;

    tableData[event.target.id - 1] = obj;
    console.log(tableData[event.target.id - 1]);
    console.log(tableData);
  } else if (typeof tableData[event.target.id - 1] == "object") {
    let rowNum = event.target.id;
    let obj = {
      id: "",
      student_name: "",
      student_roll: "",
      subject: "",
      marks: "",
      markedBy: "",
    };

    let names = document.getElementById(`st_name${rowNum}`);
    let r_num = document.getElementById(`roll_num${rowNum}`);
    let subj = document.getElementById(`subject${rowNum}`);
    let mark = document.getElementById(`marks${rowNum}`);
    let email = document.getElementById(`mark_by${rowNum}`);

    obj.id = event.target.id;
    obj.student_name = names.value;
    obj.student_roll = r_num.value;
    obj.subject = subj.value;
    obj.marks = mark.value;
    obj.markedBy = email.value;

    tableData[rowNum - 1] = obj;
    console.log(tableData[rowNum - 1]);
    console.log(tableData);
  }
}
