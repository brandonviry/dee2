import { RANDOM  } from "./function"

let hide_face =(face:number[])=>{
  face.forEach((elt)=>{
    document.querySelector("#case"+elt.toString()+"> p")!.style.visibility = "hidden";
   
  })

}
let show_face =(face:number[])=>{
  face.forEach((elt)=>{
    document.querySelector("#case"+elt.toString()+"> p")!.style.visibility = "visible";
   
  })

}

let mj_dee = (nombre: number): void => {
  
  show_face([1,2,3,4,5,6,7,8,9])

  switch (nombre) {
    case 1:
      hide_face([1,2,3,4,6,7,8,9])

      break;
    case 2:
      hide_face([2,3,4,5,6,7,8])
      break;
    case 3:
      hide_face([2,3,4,6,7,8])
      break;

    case 4:
      hide_face([2,4,5,6,8])
      break;
    case 5:
      hide_face([2,4,6,8])
      break;
    case 6:
      hide_face([0])
      break;

    default:
      
    let zone= [1,2,3,4,5,6,7,8,9]
      
      zone.forEach((elt)=>{
        if(elt%2===0){
          document.querySelector("#case"+elt.toString())!.style.backgroundColor = "orange";
        }
        else{
          document.querySelector("#case"+elt.toString())!.style.backgroundColor = "red";
        }
       
      })
      hide_face(zone)


      break;
  }
};






let main =()=>{


  mj_dee(RANDOM(1,6))

  document.querySelector("#dee")?.addEventListener("click",()=>{
    mj_dee(RANDOM(1,6))
  })

  document.querySelector("#btn-lancer")?.addEventListener("click",()=>{
    mj_dee(RANDOM(1,6))
  })



}

(()=>main())()