document.addEventListener('DOMContentLoaded', function() {

   // Burger
   const burger = document.querySelector('.burger');
   const menu = document.querySelector('.nav-list');
   
   burger.addEventListener('click',()=>{
      menu.classList.toggle("open");
   });
   
   const state = {
      quantity: 0,
      orders: 0,
      package: 0,
      accounting: false,
      rental: false,
      stateSum(){
         let sum = this.quantity + this.package + this.orders;
         if(this.accounting){
            sum += 35;
         }
         if(this.rental){
            sum += 5;
         }
         return sum;
      }
   };
   const package = document.querySelector("#package");
   const total = document.querySelector(".calc-total");
   // rozwijana lista
   const select = document.querySelector(".pack");
   const pList = document.querySelector(".p-list");

   select.addEventListener('click', ()=> {
      pList.classList.toggle("d-none");
      select.classList.toggle("clicked");
   })

   
   
   function showTotal(){
      let showT = document.querySelectorAll(".calc-right .d-none").length;
      if(showT < 5){
      total.classList.add("show");
      } else {
      total.classList.remove("show");
       }
      total.children[1].innerText = `${state.stateSum()}$`;
   }


   for(let el of pList.children){
      el.addEventListener('click', function(){
         select.style.color = '#000';
         select.innerText = this.innerText;
         pList.classList.add("d-none");
         switch(select.innerText){
            case 'Basic':
               state.package = 0;
               break;
            case 'Professional':
               state.package = 25;
               break;
            case 'Premium':
               state.package = 60;
               break;
         }
         package.classList.remove("d-none");
         select.classList.remove("clicked");
         package.children[1].innerText = this.innerText;
         package.children[2].innerText = `${state.package}$`;
         showTotal();
      })
   }

   const check1 = document.querySelector("#acc");
   const check2 = document.querySelector("#rent");

   const accbox = document.querySelector("#accounting");
   const termbox = document.querySelector("#terminal");

   check1.addEventListener('change', function(){
      if(this.checked){
         state.accounting = true;
         accbox.classList.remove("d-none");
         showTotal()
         
      } else {
         state.accounting = false;
         accbox.classList.add("d-none");
         showTotal()
      }
   })

   check2.addEventListener('change', function(){
      if(this.checked){
         state.rental = true;
         termbox.classList.remove("d-none");  
         showTotal()
      } else {
         state.rental = false;
         termbox.classList.add("d-none");
         showTotal()
      }
   })
   const quanInp = document.querySelector("#quantity");
   const products = document.querySelector("#products");

   quanInp.addEventListener('change', function(){
      if(this.value > 0){
         state.quantity = Math.abs(this.value) * 0.5;
         products.classList.remove("d-none");
         products.children[1].innerText = `${this.value} * $0.5`;
         products.children[2].innerText = `${Math.abs(this.value) * 0.5}$`;
      } else {
         products.classList.add("d-none");
      }
      showTotal();
   })
   quanInp.addEventListener('keyup', function(){
      if(this.value > 0){
         state.quantity = Math.abs(this.value) * 0.5;
         products.classList.remove("d-none");
         products.children[1].innerText = `${this.value} * $0.5`;
         products.children[2].innerText = `${Math.abs(this.value) * 0.5}$`;
      } else {
         products.classList.add("d-none");
      }
      showTotal();
   })

   const orderInp = document.querySelector("#est");
   const orders = document.querySelector("#orders");

   orderInp.addEventListener('change', function(){
      if(this.value > 0){
         state.orders = Math.abs(this.value) * 0.5;
         orders.classList.remove("d-none");
         orders.children[1].innerText = `${this.value} * $0.5`;
         orders.children[2].innerText = `${Math.abs(this.value) * 0.5}$`;
      } else {
         orders.classList.add("d-none");
      }
      showTotal();
   })
   orderInp.addEventListener('keyup', function(){
      if(this.value > 0){
         state.orders = Math.abs(this.value) * 0.5;
         orders.classList.remove("d-none");
         orders.children[1].innerText = `${this.value} * $0.5`;
         orders.children[2].innerText = `${Math.abs(this.value) * 0.5}$`;
      } else {
         orders.classList.add("d-none");
      }
      showTotal();
   })
});



