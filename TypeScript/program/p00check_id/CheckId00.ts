export class CheckId00{
    constructor(private id:string, private pw:string){
    }
    checkId(){
      if(this.id === 'jin' && this.pw === '111'){
        console.log('y');
      } else{
        console.log('n');
      }
    }
  }
// export {CheckId00};
