var object=[{image:"image/1.jpg",name:"Walter White",work:"Master Chef"},{image:"image/2.jpg",name:"Sarah Jhonson",work:"Patissier"},{image:"image/3.jpg",name:"William Anderson",work:"Cook"}]
var checkobj=object.keys()

var getting=document.getElementById("section")
var container=document.createElement("div")
var head=document.createElement("header")
var head1=document.createElement("h3")
var head1sub=document.createElement("span")
var head2=document.createElement("p")
var row=document.createElement("div")


container.setAttribute("class","container")
row.setAttribute("class","row justify-content-center")
getting.setAttribute("style","background:linear-gradient(#fafafab5,#fafafab5), url('image/bg.jpg');background-attachment:fixed;height:100vh")

head.setAttribute("class","text-center pt-3 pb-5")
head1.setAttribute("style","font-family: 'Fasthand', cursive;font-size:40px;")
head1.innerHTML="Our Proffesional"
head1sub.setAttribute("style","font-family: 'Fasthand', cursive;font-size:40px;color:orange")
head1sub.innerHTML=" chef"
head2.innerHTML="Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."

getting.appendChild(container)
container.appendChild(head)
container.appendChild(row)
head.appendChild(head1)
head1.appendChild(head1sub)
head.appendChild(head2)

for(const j of checkobj){
	var child=document.createElement("div")
	var child1=document.createElement("img")
	var child2=document.createElement("div")
	var subchild1=document.createElement("h3")
	var subchild2=document.createElement("p")

	var subchildicon=document.createElement("div")	
	var subchildicon1=document.createElement("i")
	var subchildicon2=document.createElement("i")
	var subchildicon3=document.createElement("i")
	var subchildicon4=document.createElement("i")
	
	
	child1.setAttribute("style","width:100%;height:400px")
	child1.setAttribute("src",object[j].image)
	child2.setAttribute("class","col-10 text-center")
	child2.setAttribute("style","position:absolute;bottom:-50px;background-color:white;padding:15px;")
	subchild1.innerHTML=object[j].name
	subchild2.innerHTML=object[j].work
	subchildicon.setAttribute("class","aftr")
	subchildicon1.setAttribute("class","bi bi-twitter px-2 text-secondary")
	subchildicon2.setAttribute("class","bi bi-facebook px-2 text-secondary")
	subchildicon3.setAttribute("class","bi bi-instagram px-2 text-secondary")
	subchildicon4.setAttribute("class","bi bi-linkedin px-2 text-secondary")
	
	
	
	child.appendChild(child1)
	child.appendChild(child2)
	child2.appendChild(subchild1)
	child2.appendChild(subchild2)
	child2.appendChild(subchildicon)
	subchildicon.appendChild(subchildicon1)
	subchildicon.appendChild(subchildicon2)
	subchildicon.appendChild(subchildicon3)
	subchildicon.appendChild(subchildicon4)
	row.appendChild(child)
	
	child.setAttribute("class","col-12 col-sm-6 col-lg-4 position-relative row justify-content-center")
	child.setAttribute("style","margin-bottom:65px;")
}