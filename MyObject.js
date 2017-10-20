function Shoe(s,b,c){
    this.size=s;
    this.brand=b;
    this.color=c;

    this.doesItFit = function(footsize){
      if(this.size == footsize){
        console.log("Yes")
}
        else(console.log("NO!"))

    };
  }
    function main(){
        let shoes = new Shoe(13, "Nike", "blue");
        shoes.doesItFit(10)
    }

main()
