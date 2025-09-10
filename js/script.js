function DarkAndWhiteMode() {
  let cardmood = document.getElementsByClassName("colorMode");

  // start Mod night background color
  let themeClick = document.getElementById("theme-toggle");
  let newClass = document.getElementById("famoonAndSun");

  themeClick.addEventListener("click", () => {
    if (newClass.classList.contains("fa-moon")) {
      localStorage.setItem("mode", "white");
      newClass.classList.replace("fa-moon", "fa-sun");
      Removemod();
    } else {
      mod();
      newClass.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("mode", "Dark");
    }
  });

  function mod() {
    for (let i of cardmood) {
      i.style.background = "rgb(19 43 113)";
      i.style.color = "#6a96f7";
    }
    document.body.style.background = "#081227";
    document.body.style.color = "white";
  }
  //       //
  function Removemod() {
    for (let i of cardmood) {
      i.style.background = "white";
      i.style.color = "black";
    }
    document.body.style.background = "#f9fafb";
    document.body.style.color = "black";
  }
  //
  if (localStorage.getItem("mode") == "Dark") {
    newClass.classList.replace("fa-sun", "fa-moon");
    mod();
  } else {
    Removemod();
  }
}
DarkAndWhiteMode();
// task-list

MyTasks = [
  {
    title: " قرائه كتاب",
    date: "15/12/2023",
    isDone: false,
  },
  {
    title: " انهاء الكورس",
    date: "15/12/2023",
    isDone: false,
  },
  {
    title: " انهاء المشروع",
    date: "15/12/2023",
    isDone: true,
  },
];

MyTasks = JSON.parse(localStorage.getItem("MyTasks"))

// =============
function fillTasksOnThepage() {
  var c = 10;
  document.getElementById("task-list").innerHTML = "";

  let index = 0;
  for (tasks of MyTasks) {
    let taskForm = `
                            <li  class=" ${tasks.isDone ? "doneLi" : ""} task-item card rounded-xl shadow p-5 colorMode " data-id="undefined">
                                <div  class="AddEditContant flex items-start justify-between">
                                    <div class="flex items-start space-x-4 flex-grow">
                                        <button onclick="clickIsDone(${index} , this )"  class=" ${tasks.isDone ? "done" : ""}  cercler w-7 h-7 rounded-full border-2 flex items-center justify-center check-btn border-gray-300 dark-theme:border-gray-600" aria-label="Mark as complete">
                                        </button>
                                        <div class="flex-grow">
                                            <div class="flex items-center flex-wrap">
                                                <span class="task-text ">${tasks.title}</span>
                                                <span class="text-xs px-2 py-1 rounded-full ml-2 priority-undefined">undefined</span>
                                            </div>
                                            <div class="text-xs mt-2">
                                                <span class="text-gray-500 dark-theme:text-gray-400"><i class="fas fa-plus-circle mr-1"></i>${tasks.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex space-x-3 view-buttons">
                                        <button onclick="Edid(${index})" class="text-blue-500 hover:text-blue-700 dark-theme:text-blue-400 dark-theme:hover:text-blue-300 transition duration-200 action-btn" aria-label="Edit task">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button  onclick="Delet(${index})" class="text-red-500 hover:text-red-700 dark-theme:text-red-400 dark-theme:hover:text-red-300 transition duration-200 action-btn" aria-label="Delete task">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
    `;

doneif()



    document.getElementById("task-list").innerHTML += taskForm;
    index++;

  }
  DarkAndWhiteMode();
  document.getElementById("task-stats").innerHTML = `${index} tasks remaining`;
  noneCards();

  function noneCards() {
    if (index == 0) {
      document.getElementById("NoTasks").style.display = "block";
    } else {
      document.getElementById("NoTasks").style.display = "none";
    }
  }


}

fillTasksOnThepage();
function Delet(index) {
  MyTasks.splice(index, 1);
  fillTasksOnThepage();
  DarkAndWhiteMode();
localAdd()
}

function Edid(index) {
  ButtonEditTasks(index);
localAdd()
}

// =============== get value input =====
document.getElementById("submitBut").addEventListener("click", () => {
  function AddTheTadkd() {
    let inputvalue = document.getElementById("task-input").value;

    let myJeson = {
      title: inputvalue,
      date: "15/12/2023",
      isDone: false,
    };
    MyTasks.push(myJeson);

    fillTasksOnThepage();
    DarkAndWhiteMode();
    localAdd()
  }
  AddTheTadkd();
});
DarkAndWhiteMode();
// id="task-stats"

// =========

function ButtonEditTasks(index) {


  document.querySelectorAll(".AddEditContant")[index].innerHTML = `
 <!-- انبوت الاضافه -->
                                  <div class="flex items-start space-x-4 flex-grow">
                                         <button class="w-7 h-7 rounded-full border-2 flex items-center justify-center check-btn border-gray-300 dark-theme:border-gray-600" aria-label="Mark as complete">
                                         </button>
                                       <div class="flex-grow">
                                  <input  type="text" value="${MyTasks[index].title}" class=" inputEditValue w-full p-2 border rounded-lg bg-white dark-theme:bg-gray-700 text-gray-900 dark-theme:text-white task-edit-input" id="edit-input-1756834088152">
                                 <div class="text-xs mt-2">
                                     <span class="text-gray-500 dark-theme:text-gray-400"><i class="fas fa-plus-circle mr-1"></i> Sep 2, 2025</span>
                                  </div>
                            </div>
                            <!-- // ازرار التعديل -->
                           <div class="flex space-x-2 edit-buttons">
                           <button onclick="saveTaskEdit(${index}, this.closest('.AddEditContant').querySelector('.inputEditValue'))" class="save-btn">
                               <i class="fas fa-check"></i>
                           </button>
                          <button onclick="cancelTaskEdit(${index})" class="cancel-btn" aria-label="Cancel editing">
                          <i class="fas fa-times"></i>
                          </button>
                          </div>
`;
}

function saveTaskEdit(index, inputElement) {
  console.log(inputElement.value);
  MyTasks[index].title = inputElement.value;
  fillTasksOnThepage();
  localAdd()
}

// ==========
function cancelTaskEdit(index) {
  MyTasks[index].title = MyTasks[index].title;
  fillTasksOnThepage();
}

function clickIsDone(index , donebut) {
  // newClass.classList.contains("fa-moon")
  if (donebut.classList.contains("done")) {
    let taskDone = MyTasks[index].isDone = false


  }else {
    let taskDone = MyTasks[index].isDone = true
  }




  fillTasksOnThepage();
  localAdd()
}

// console.log(doneColor[0]);

// if (tasks.isDone  == true) {
//
//   let doneColor = document.querySelectorAll(".cercler")
//   for (let i = 0; i <= doneColor.length ; i++) {
//   doneColor[i].style.background ="#10b981"
//     console.log(doneColor[i]);
//   }
// }

function doneif() {
  if (tasks.isDone  == true) {


  }

}

console.log(MyTasks.isDone);



// localStorage
function localAdd() {

  let TasksStor = JSON.stringify(MyTasks)
  let storg = localStorage.setItem("MyTasks" , TasksStor)
}
localAdd()
