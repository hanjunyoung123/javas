window.addEventListener("load",function(){
    const btn = this.document.getElementById("btn")
    const addValue = this.document.getElementById("addValue")
    const result = this.document.getElementById("result")
    const allClear = this.document.getElementById("allClear")
    //추가버튼 클릭했을때 함수
    btn.addEventListener("click",addTodo)
    function addTodo(){
        const value = addValue.value.trim()  //trim 빈공간에도추가x
        // console.log(value);
        if(value === "")
            alert("내용입력하세요.")
        // 함수종료
        return
        const list = document.createElement("li")
        list.innerHTML = `${value} <button class="del-btn">X</button>`
        // console.log(list);
        result.insertBefore(list , result.firstChild) // 입력한순으로 추가입력
        addValue.value = ``
        addValue.focus() //입력하고난뒤 깜빡임
        const delBtn = document.querySelector(".del-btn")
        list.addEventListener("click" , function(){
            list.classList.toggle("completed")
        })
    }
    //삭제하기 함수
    function delList(e){
        e.target.parentElement.remove()
    }
    //enter input 에 value 출력되게하는 함수
    addValue.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
        e.preventDefault()
            addTodo()
        }
    })
    // 모두 삭제하기 함수
    allClear.addEventListener("click",allClearList)
    function allClearList(){
        if(confirm("정말 삭제하시겠습니까?")){
            if(result.innerHTML === ""){
                alert("삭제할 목록이 없습니다.")
            }
            else{
                result.innerHTML = ""
            }
        }
    }
})