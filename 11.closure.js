// execution context //
// calstack //
//const counter =  () => {
    //let count = 0;

    //return () => {
      //  count++;
    //    console.log(count);
  //  };
//};

//const counter = counter();
//const counter1 = counter();
//counter();
//counter();
//counter();
//counter1();
//counter1();



const count = () => {
    let count = 0;

   const increment = () => {
    count ++;

    };

    const decrement = () => {
        count --;
    };
    const show = () => {
        console.log(count);
    
    };

    return{
        increment, decrement, show
    };
    
};

const counter = count();

counter.show();      // 0
counter.increment();
counter.show();      // 1
counter.increment();
counter.show();      // 2
counter.decrement();
counter.show();      


