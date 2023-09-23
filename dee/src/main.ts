import { RANDOM  } from "./function"

let hide_face =(face:number[])=>{
  face.forEach((elt)=>{
    (document.querySelector("#case"+elt.toString()+"> p")! as HTMLParagraphElement).style.visibility = "hidden";
   
  })

}
let show_face =(face:number[])=>{
  face.forEach((elt)=>{
    (document.querySelector("#case"+elt.toString()+"> p")! as HTMLParagraphElement).style.visibility ="visible";
   
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
      hide_face([2,5,8])
      break;

    default:

     hide_face([1,2,3,4,6,7,8,9]);
    (document.querySelector("#case5 > p")! as HTMLParagraphElement).textContent ="ERREUR"
    
    


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