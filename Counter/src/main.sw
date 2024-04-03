contract;

storage {
    counter: u64 = 0,
}

abi Counter {

    #[storage(write)]
    fn set_counter(value: u64) -> u64;

    #[storage(read)]
    fn get_counter() -> u64;
    
    #[storage(read, write)]
    fn inc_counter() -> u64;

    #[storage(read,write)]
    fn dec_counter() -> u64;
}

impl Counter for Contract {
        
    #[storage(write)]
    fn set_counter(value: u64) -> u64 {
        storage.counter.write(value);
        value
    }
 
    #[storage(read)]
    fn get_counter() -> u64 {
       storage.counter.read()
       
    }
    
    #[storage(read, write)]
    fn inc_counter() -> u64 {
        let inc_counter = storage.counter.read() + 1;
        storage.counter.write(inc_counter);
        inc_counter

    }

    #[storage(read,write)]
    fn dec_counter() -> u64{
        let dec_counter = storage.counter.read() + 1;
        storage.counter.write(dec_counter);
        dec_counter


    }
  
}
